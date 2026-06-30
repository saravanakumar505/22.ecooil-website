<div align="center">
  <img src="assets/images/logo.png" alt="EcoOil Logo" width="150" />
  
  # EcoOil – Mobile Oil Recycling & Fluid Exchange Service 🛢️🌱
  
  <p>
    <strong>A Premium, Eco-Friendly Commercial Fleet Maintenance & Management Platform</strong>
  </p>

  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
  [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge)](#)
</div>

---

## 📖 Project Description

**EcoOil** is a cutting-edge frontend website and comprehensive Fleet Manager Dashboard designed specifically for modern, eco-friendly mobile fluid exchange and oil recycling services. 

It provides an unparalleled user experience featuring a fully responsive design, seamless Light/Dark mode toggling, multi-language RTL support, and beautiful AOS-powered micro-animations. The integrated **Fleet Manager Dashboard** empowers businesses to track fluid usage, schedule mobile maintenance, view service history, and access EPA compliance certificates in real-time.

---

## ✨ Features

- 📱 **Fully Responsive Design**: Pixel-perfect layouts for Mobile, Tablet, and Desktop screens.
- 🌓 **Light & Dark Mode**: Beautiful, hand-crafted themes saved locally via LocalStorage.
- 🌍 **RTL Support**: Full Right-to-Left (RTL) language layout support with one-click toggling.
- 📊 **Fleet Manager Dashboard**: A premium, interactive dashboard for commercial clients.
- 🎨 **Tailwind CSS CLI**: Utility-first styling utilizing the robust Tailwind compiler.
- ⚡ **Smooth Animations**: Powered by AOS (Animate On Scroll) for dynamic, engaging scroll reveals.
- 🛠️ **Interactive Components**: Modals, dropdowns, sticky navbars, and interactive charts/cards.
- 🧩 **Lucide Icons**: Clean, scalable vector icons seamlessly integrated into the UI.

---

## 💻 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure and layout |
| **Tailwind CSS (v3)** | Utility-first styling and responsive design |
| **Vanilla JavaScript** | DOM manipulation, theme logic, modal handling, and interactivity |
| **Lucide Icons** | SVG icon system |
| **AOS Library** | Scroll-based micro-animations |

---

## 📂 Folder Structure

```text
ecooil/
├── index.html                  # Main Landing Page (Home 1)
├── package.json                # NPM configuration and Tailwind scripts
├── tailwind.config.js          # Tailwind CSS design system and theme config
├── README.md                   # Project documentation
├── INSTALLATION.md             # Detailed installation and setup guide
├── pages/                      # All internal website pages
│   ├── home2.html              # Alternative Landing Page
│   ├── about.html              # About Us
│   ├── services.html           # Engine Oil Exchange
│   ├── fleet.html              # Fleet Maintenance
│   ├── recycling.html          # Fluid Recycling
│   ├── pricing.html            # Pricing & Plans
│   ├── contact.html            # Contact & Location
│   ├── terms.html              # Terms & Conditions
│   ├── 404.html                # Error Page
│   └── dashboard/              # Fleet Manager Dashboard Pages
│       ├── index.html          # Dashboard Overview
│       ├── my-fleet.html       # Fleet Management
│       ├── schedule-service.html # Booking System
│       └── ...                 # Other Dashboard Views
└── assets/                     # Static Assets
    ├── css/
    │   ├── input.css           # Tailwind base styles and custom CSS
    │   └── output.css          # Compiled Tailwind stylesheet
    ├── js/
    │   └── main.js             # Core logic (Modals, Theme, RTL, Nav)
    ├── images/                 # Project images and placeholders
    └── icons/                  # Local SVGs
```

---

## 🗺️ Pages Overview

| Page Group | Pages Included |
| :--- | :--- |
| **Landing Pages** | Home 1 (`index.html`), Home 2 (`home2.html`) |
| **Core Company** | About, Contact, Pricing, FAQ, Privacy Policy, Terms & Conditions |
| **Services** | Engine Oil Exchange, Fluid Recycling, Fleet Maintenance |
| **SaaS Dashboard** | Overview, Fleet Manager, Service History, Maintenance Logs, EPA Certificates, Profile |
| **Utility** | 404 Error Page |

---

## 📸 Screenshots

> *Placeholder for project screenshots.*

<div align="center">
  <img src="https://via.placeholder.com/800x400.png?text=Homepage+Preview" alt="Homepage Preview" width="48%">
  <img src="https://via.placeholder.com/800x400.png?text=Dashboard+Dark+Mode" alt="Dashboard Preview" width="48%">
</div>

---

## 🚀 Running the Project

For a detailed, step-by-step installation guide, please refer to the [**INSTALLATION.md**](./INSTALLATION.md) file.

### Quick Start Commands

Make sure you have Node.js installed, then run the following in your terminal:

```bash
# Install Tailwind CSS dependencies
npm install

# Start the Tailwind CLI watcher (for development)
npm run watch:css

# Build the final minified CSS (for production)
npm run build:css
```

Once the CSS is compiled, you can open `index.html` using **Live Server** in VS Code or any local web server.

---

## 📱 Responsive Design & Compatibility

The UI is built with a mobile-first approach using Tailwind's breakpoint system (`sm`, `md`, `lg`, `xl`, `2xl`). 
- **Browsers**: Compatible with all modern browsers (Chrome, Firefox, Safari, Edge).
- **Devices**: Optimized for small mobile screens (320px+), tablets, and large 4K displays.

---

## 🔮 Future Enhancements

- [ ] Connect the dashboard forms to a backend API (Node.js/Python).
- [ ] Implement Chart.js for real-time live data visualization in the Dashboard.
- [ ] Add backend user authentication and role-based access control.
- [ ] Integrate a payment gateway on the Pricing page.

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC). 

---

## 👨‍💻 Author

Designed and developed for **EcoOil Commercial Services**.
