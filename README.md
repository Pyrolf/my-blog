# 🖋️ My Blog

A professional, editorial-style blog template built with **React**, **TypeScript**, and **Framer Motion**. This project features a robust dynamic routing system, an automated reading time utility, and a custom-built themed UI.

## ✨ Features

-   **🌓 Two-Tier Theming**: Seamless Light and Dark modes using React Context and CSS Variables.
-   **⏱️ Dynamic Reading Time**: Automatically calculates "X min read" based on word count.
-   **🎭 Fluid Motion**: Page-level transitions and interactive hover states via `framer-motion`.
-   **📖 Editorial UX**: Optimized typography with fluid scaling (`clamp`) and accessible line lengths.
-   **🛣️ Advanced Routing**: Dynamic route handling with `react-router-dom` and automated scroll-to-top.
-   **⚡ Performance**: Built with Vite for instant Hot Module Replacement (HMR) and optimized builds.

## 🛠️ Tech Stack

-   **Framework:** [React 19](https://reactjs.org) + [TypeScript](https://typescriptlang.org)
-   **Build Tool:** [Vite](https://vitejs.dev)
-   **Routing:** [React Router v7](https://reactrouter.com)
-   **Animations:** [Framer Motion](https://framer.com)
-   **Styling:** Modern CSS3 (Variables + Grid + Flexbox)

## 📂 Project Structure

```text
src/
├── components/     # UI Parts (Navbar, PostCard, AnimatedPage)
├── context/        # ThemeContext & ThemeProvider logic
├── data/           # Mock blog data (7+ varying length posts)
├── layouts/        # Page wrappers (MainLayout with AnimatePresence)
├── pages/          # Full views (HomePage, PostPage)
├── types/          # TypeScript Interfaces (Post, Theme)
├── utils/          # Logic helpers (readingTime.ts)
├── App.tsx         # Router configuration & entry
└── index.css       # Global theme variables & editorial styling
```

## 🚀 Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Pyrolf/my-blog.git
    cd my-blog
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Launch Dev Server**
    ```bash
    npm run dev
    ```

## 📐 Best Practices Included

-   **Separation of Concerns**: Logic (Hooks/Utils) is separated from UI (Components).
-   **Scalability**: Feature-based folder structure for easy expansion.
-   **Fast Refresh**: Strict adherence to ESLint rules for optimized Vite development.
-   **Typography**: Using `ch` units for content width and `pre-line` for content formatting.

## 📜 License
MIT License - Created for the developer community.
