# Installation Guide

## Prerequisites

Before getting started, make sure you have the following installed:

- Node.js (v18 or later recommended)
- npm (comes with Node.js)
- Visual Studio Code (recommended)
- Live Server Extension (recommended)

---

## 1. Clone the Repository

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd ecooil
```

---

## 2. Install Dependencies

Open your terminal in the project root directory and install the required packages:

```bash
npm install
```

This will generate the **node_modules** folder.

---

## 3. Run the Tailwind CSS Compiler

This project uses **Tailwind CSS CLI** to compile the custom styles.

Run:

```bash
npx @tailwindcss/cli -i ./assets/css/input.css -o ./assets/css/output.css --watch
```

or, if your `package.json` already contains the watch script:

```bash
npm run watch
```

Keep this terminal running while developing so Tailwind automatically rebuilds `output.css` whenever you save changes.

---

## 4. Start the Website

Open `index.html` using **Live Server** in Visual Studio Code.

or

Open `index.html` directly in your browser.

---

## 5. Production Build

To generate a minified CSS file for production:

```bash
npm run build
```

---

## Project Structure

```
ecooil/
│
├── index.html
├── pages/
├── assets/
│   ├── css/
│   │   ├── input.css
│   │   └── output.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   └── icons/
│
├── package.json
├── package-lock.json
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── INSTALLATION.md
```

---

## Features

- HTML5
- Tailwind CSS CLI
- Vanilla JavaScript
- Responsive Design
- Dark / Light Mode
- RTL Support
- Fleet Manager Dashboard
- LocalStorage
- Mobile Friendly
- AOS Animations

---

## Browser Support

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari
