let buttonParams = [];
let images = [];

const openMenu = (data = null) => {
    let html = "";
    data.forEach((item, index) => {
        if(!item.hidden) {
            let header = item.header;
            let message = item.txt || item.text;
            let isMenuHeader = item.isMenuHeader;
            let isDisabled = item.disabled;
            let icon = item.icon;
            let rtIcon = item.rtIcon;
            images[index] = item;
            html += getButtonRender(header, message, index, isMenuHeader, isDisabled, icon, rtIcon);
            if (item.params) buttonParams[index] = item.params;
        }
    });

    $("#buttons").html(html);
    $('.background').fadeIn(200);

    $('.button').click(function() { 
        const target = $(this)
        if (!target.hasClass('title') && !target.hasClass('disabled')) {
            postData(target.attr('id'));
        }
    });
};

const getButtonRender = (header, message = null, id, isMenuHeader, isDisabled, icon, rtIcon = null) => {
    // Detect if rtIcon is an arrow (to trigger special background)
    const isArrow = rtIcon &&  rtIcon === "fa-solid fa-chevron-right";

    return `
        <div class="${isMenuHeader ? "title" : "button"} ${isDisabled ? "disabled" : ""} ${isArrow ? "has-arrow" : ""}" id="${id}">
            
            ${icon ? `
                <div class="icon">
                    <i class="${icon}"></i>
                </div>
            ` : ""}
            
            <div class="column">
                <div class="header">${header}</div>
                ${message ? `<div class="text">${message}</div>` : ""}
            </div>

            ${rtIcon ? `
                <div class="rt-icon">
                    ${rtIcon.startsWith("fa") ? `<i class="${rtIcon}"></i>` : `<span>${rtIcon}</span>`}
                </div>
            ` : ""}
        </div>
    `;
};



const closeMenu = () => {
    $("#buttons").html(" ");
    $('.background').fadeOut(100);
    buttonParams = [];
    images = [];
};

const postData = (id) => {
    $.post(`https://${GetParentResourceName()}/clickedButton`, JSON.stringify(parseInt(id) + 1));
    return closeMenu();
};

const cancelMenu = () => {
    $.post(`https://${GetParentResourceName()}/closeMenu`);
    return closeMenu();
};


window.addEventListener("message", (event) => {
    const data = event.data;
    const buttons = data.data;
    const action = data.action;
    switch (action) {
        case "OPEN_MENU":
        case "SHOW_HEADER":
            return openMenu(buttons);
        case "CLOSE_MENU":
            return closeMenu();
        default:
            return;
    }
});

window.addEventListener('mousemove', (event) => {
    let $target = $(event.target);
    if ($target.closest('.button:hover').length && $('.button').is(":visible")) {
        let id = event.target.id;
        if (!images[id]) return
        if (images[id].image) {
            $('#image').attr('src', images[id].image);
            $('#imageHover').css('display' , 'block');
        }
    }
    else {
        $('#imageHover').css('display' , 'none');
    }
})

document.onkeyup = function (event) {
    const charCode = event.key;
    if (charCode == "Escape") {
        cancelMenu();
    }
};
