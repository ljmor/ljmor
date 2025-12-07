# 🚀 Luis Mora | AI Engineer & Software Developer Portfolio

![Project Status](https://img.shields.io/badge/Status-Production%20Ready-success)
![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Tailwind%20%7C%20Framer%20Motion-blue)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

## Overview

This repository contains the source code for the personal portfolio of **Luis Mora**, a Software Developer and AI Engineer specializing in LLM evaluation, Reinforcement Learning (RLHF/RLAIF), and scalable data solutions.

The project is designed as a **high-performance, immersive single-page application (SPA)**. It leverages a **neuromorphic design system** with dark aesthetics, subtle glassmorphism, and fluid animations to reflect a modern, AI-driven professional identity.

### Key Features

* **Neuromorphic UI/UX**: Sophisticated dark theme with subtle depth, glowing edges, and glassmorphism effects.
* **Immersive Interactions**: Custom magnetic cursor, hover effects, and smooth scroll animations powered by **Framer Motion**.
* **Fully Responsive**: Mobile-first architecture ensuring seamless performance across desktops, tablets, and mobile devices.
* **Performance Optimized**: Built with **Vite** for ultra-fast bundling and loading times.
* **Contact Integration**: Functional contact form powered by **Formspree** (official React library integration).
* **Modern Stack**: Strict usage of functional React components and Tailwind CSS utility classes.

## Tech Stack

* **Core Framework**: [React 18](https://reactjs.org/)
* **Build Tool**: [Vite](https://vitejs.dev/)
* **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Form Handling**: [@formspree/react](https://formspree.io/)

## Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

* **Node.js** (v18.0.0 or higher recommended)
* **npm** or **yarn**

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/ljmor/portfolio.git](https://github.com/ljmor/portfolio.git)
    cd portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open in browser**
    Navigate to `http://localhost:5173` to view the application.

## Configuration

### Contact Form Setup

The contact form is integrated with **Formspree** using the official React library. To connect it to your own email:

1.  Create an account at [formspree.io](https://formspree.io).
2.  Create a new form and copy the **Project ID** (e.g., `abcdxs`).
3.  Open `src/App.jsx` and update the configuration constant:

    ```javascript
    // src/App.jsx
    const FORMSPREE_ID = "your_form_id_here";
    ```

## 📂 Project Structure

```bash
portfolio/
├── public/              # Static assets (Resume PDF, icon)
├── src/
│   ├── App.jsx          # Main application logic and layout
│   ├── index.css        # Global styles and Tailwind directives
│   └── main.jsx         # React entry point
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite bundler configuration
└── package.json         # Project dependencies and scripts
````

## Deployment

This project is optimized for deployment on modern static hosting platforms like **Vercel**, **Netlify**, or **GitHub Pages**.

### Build for Production

To generate the optimized production build:

```bash
npm run build
```

The output files will be generated in the `dist/` directory, ready to be deployed.

-----

## Contact

**Luis Mora**
*Software Developer | AI Engineer | Machine Learning Engineer*

  * **Email**: [ljmora004@outlook.com](mailto:ljmora004@outlook.com)
  * **LinkedIn**: [linkedin.com/in/ljmor](https://www.linkedin.com/in/ljmor/)
  * **GitHub**: [github.com/ljmor](https://github.com/ljmor)

-----

## 📄 License

This project is licensed under the MIT License.