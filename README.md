# 🎛️ Nmsh Menu — Clean, Modern FiveM UI Menu (NoPixel 4.0 Inspired)

> A **NoPixel 4.0–inspired**, **FiveM menu interface** built for performance, visual clarity, and flexibility.  
> Designed and optimized for **QBCore** Servers

---

## 🖼️ Preview

> [[Watch a Preview]](https://www.youtube.com/watch?v=zw-X6iO8R6Y)

---

## 🚀 Features
 
- 🪄 **Dynamic Button System** – easily add headers, icons, emojis, or right-side icons  
- 💎 **NoPixel 4.0 Inspired Design**
- 💡 **Custom Styling** – uses `--nmsh-` CSS variables for full theme control
- 🧩 **Simple Lua Integration** – export-based system, framework-independent  

---

## 📂 Installation
1. **Download** the script and **Rename** it to `qb-menu`
2. **Place** the folder inside your `resources/[qb]` directory.  
3. Add the following line to your **server.cfg**:  
   ```cfg
   ensure qb-menu
   ```
4. Restart your server — and you’re ready to go.

---

## 🧠 Example Usage

Here’s a simple example showing how to create a custom interactive menu:

```lua
RegisterCommand('testmenu', function()
    exports['nmsh-menu']:openMenu({
        {
            header = "Main Menu",
            icon = "fas fa-mug-hot",
            isMenuHeader = true
        },
        {
            header = "Cola",
            disabled = true,
            icon = "fas fa-water",
            params = {
                event = "qb-menu:client:testMenu2",
                args = { item = "cola" }
            }
        },
        {
            header = "Water",
            icon = "fas fa-water",
            rtIcon = "fa-solid fa-chevron-right",
            text = "Fresh H2O 💧",
            params = {
                event = "qb-menu:client:testMenu2",
                args = { item = "water" }
            }
        },
        {
            header = "Cheese Burger Combo",
            text = "Tomato 🍅 <br> Cheese 🧀 <br> Orange Juice 🍹 <br> Fries 🍟",
            rtIcon = "🍔",
            icon = "fas fa-utensils",
            params = {
                event = "qb-menu:client:testMenu2",
                args = { combo = "burger" }
            }
        },
        {
            header = "Order Shawarma",
            params = {
                event = "qb-menu:client:testMenu2",
                args = { item = "shawarma" }
            }
        },
    })
end)
```

---

## 🎨 Button Customization Template

Each menu button supports these parameters:

| Parameter | Type | Description |
|------------|------|-------------|
| `header` | string | The visible title of the button |
| `text` | string (optional) | A small description or HTML break text |
| `icon` | string (optional) | FontAwesome icon (e.g. `"fas fa-water"`) |
| `rtIcon` | string (optional) | Emoji or right-side icon |
| `isMenuHeader` | boolean | Turns the button into a non-clickable title |
| `disabled` | boolean | Disables button interaction |
| `params.event` | string | The event triggered on click |
| `params.args` | table | Arguments passed to the event |

💡 If `rtIcon` is set to `"arrow"`, it automatically shows a **large background arrow**, just like **NoPixel 4.0 menus**.

---

## ⚙️ Styling and Customization

The style system is built with centralized CSS variables to make theming easy.  
You can modify button colors, radius, or accent tones directly in `style.css`:

```css
:root {
  --nmsh-color-bg-dark: rgb(43, 44, 54);
  --nmsh-color-accent: rgb(56, 236, 168);
  --nmsh-radius: 5px;
}
```

> Edit once — update the entire menu instantly.

---

## 🧩 Credits

Developed & designed by **Nmsh Dev**  
Inspired by **NoPixel 4.0**.  
Join the Discord for support, previews, and new script updates:  
[https://discord.gg/cvMw7hkZG9](https://discord.gg/cvMw7hkZG9)

---

## ❤️ Support the Project

If you love this UI, leave a ⭐ on GitHub or share it with your community.  
Your feedback drives future Nmsh Dev releases.

---

**#MadeByNmshDev | Precision • Performance • Perfection**
