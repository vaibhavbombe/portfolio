# 🚀 Vaibhav Bombe — Portfolio

A modern, responsive personal portfolio built with **React**, **Vite**, and **Tailwind CSS**, showcasing my projects, skills, and background. Includes light/dark theme support and smooth navigation across multiple pages.

🔗 **Live Site:** [https://vaibhavbombe.github.io/portfolio/](https://vaibhavbombe.github.io/portfolio/)

---

## 📸 Preview

<!-- Add a screenshot of your portfolio here -->
<!-- ![Portfolio Preview](./src/assets/hero.png) -->

---

## ✨ Features

- ⚡ Fast, modern build powered by **Vite**
- 🎨 Styled with **Tailwind CSS** for a clean, responsive UI
- 🌗 Light/Dark theme toggle via React Context
- 🧭 Multi-page navigation with **React Router**
- 📱 Fully responsive across mobile, tablet, and desktop
- 🗂️ Modular, reusable component architecture

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Frontend | React 18 |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Routing | React Router DOM v7 |
| Linting | ESLint |
| Deployment | GitHub Pages |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ProjectCard.jsx
│   ├── context/
│   │   └── ThemeContext.jsx   # Light/dark theme provider
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── HireMe.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## 🚦 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/vaibhavbombe/portfolio.git

# Navigate into the project folder
cd portfolio

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173/` (or the port Vite assigns).

### Building for Production

```bash
npm run build
```

This generates an optimized build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 🌍 Deployment

This project is deployed using **GitHub Pages** via the `gh-pages` package.

```bash
npm run deploy
```

This runs `npm run build` automatically, then pushes the contents of `dist/` to the `gh-pages` branch, which GitHub Pages serves at:

```
https://vaibhavbombe.github.io/portfolio/
```

---

## 📄 Pages

| Page | Description |
|---|---|
| **Home** | Landing page with intro and hero section |
| **About** | Background, skills, and experience |
| **Projects** | Showcase of featured projects |
| **Hire Me** | Contact / hire information |

---

## 🤝 Connect With Me

<!-- Add your links below -->
- **GitHub:** [@vaibhavbombe](https://github.com/vaibhavbombe)
- **LinkedIn:** _add your link_
- **Email:** _add your email_

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ If you like this project, consider giving it a star on GitHub!