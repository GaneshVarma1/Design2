# Design2

[GitHub Repository](https://github.com/GaneshVarma1/Design2)

## 🚀 Live Demo

You can find the source code and contribute here: [https://github.com/GaneshVarma1/Design2](https://github.com/GaneshVarma1/Design2)

# Flappy Bird-Inspired Portfolio

Welcome to your Flappy Bird-inspired developer portfolio! 🚀

This project is a modern, playful, and fully customizable portfolio template with a built-in Flappy Bird game experience. It uses React, TypeScript, and Tailwind CSS for a beautiful and responsive design.

## ✨ Features
- Flappy Bird-themed animated background and floating birds
- Modern, responsive layout
- Easy-to-edit data files for your content
- Built-in playable Flappy Bird game (modal or new tab)
- Timeline for Education and Experience
- Creative, interactive UI

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## 📝 Customization: Make It Yours!

All your personal content (bio, projects, education, experience, hero section, etc.) is stored in the `src/data` folder. Just edit the files there to update your portfolio:

- `src/data/hero.ts` — Hero section (name, title, description)
- `src/data/about.ts` — About, stats, education, experience
- `src/data/projects.ts` — Projects list

**Example:**
```ts
// src/data/about.ts
export const aboutData = {
  description: [
    "I'm a passionate developer...",
    "I love building cool things!"
  ],
  // ...
};
```

Just change the text, save, and Tada! 🎉 You have a new portfolio.

## 🎮 Built-in Flappy Bird Game
- Click the **Play Flappy Bird** button on the homepage to play the game.
- The game can open in a popup/modal or a new tab (configurable).

## 🖼️ Assets & Theming
- Logo and images are managed in `src/constants/assets.ts`.
- Colors and themes use Tailwind CSS for easy customization.

## 📦 Build for Production
```bash
npm run build
# or
yarn build
```
The output will be in the `dist` folder.

## 🙏 Credits
- Inspired by Flappy Bird
- Built with ❤️ by Sri ([bit.ly/sriport](https://bit.ly/sriport))

---

**Enjoy your new portfolio and happy coding!** 