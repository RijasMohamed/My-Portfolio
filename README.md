# Rijas Portfolio

A motion-rich personal portfolio built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui. The site highlights experience, featured projects, technical skills, and dedicated profile cards while supporting light/dark themes and smooth page transitions.

## ✨ Features
- Responsive layout with animated section reveals and route transitions
- Theme toggle plus system-theme awareness via next-themes
- Content-driven configuration stored in [src/content/site-data.ts](src/content/site-data.ts)
- Reusable UI primitives powered by shadcn/ui and Radix
- Contact form, resume highlights, and profile callouts for GitHub and LinkedIn
- Production-ready Vite setup (ESLint, TypeScript, Tailwind, PostCSS)

## 🧱 Tech Stack
| Layer | Tools |
| --- | --- |
| Frontend | React 18, TypeScript, Vite |
| Styling | Tailwind CSS, tailwind-merge, tailwindcss-animate |
| UI Components | shadcn/ui, Radix Primitives, Lucide icons |
| Motion & UX | Framer Motion, @tanstack/react-query, custom hooks |
| Deployment | GitHub Pages (via `gh-pages`) |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (recommend managing with nvm)
- npm (ships with Node)

### Installation
```bash
git clone https://github.com/RijasMohamed/Rijas_Portfolio.git
cd Rijas_Portfolio
npm install
```

### Development
```bash
npm run dev
```
The dev server runs at http://localhost:8080/Rijas_Portfolio/ (matching the `base` option in [vite.config.ts](vite.config.ts)).

### Production Build
```bash
npm run build
npm run preview
```

## 📦 Available Scripts
| Command | Description |
| --- | --- |
| `npm run start` | Alias of `vite`; useful for some hosts |
| `npm run dev` | Starts the Vite dev server with HMR |
| `npm run build` | Generates the optimized production bundle |
| `npm run build:dev` | Production build using development env vars |
| `npm run preview` | Serves the build output for local inspection |
| `npm run lint` | Runs ESLint across the repo |
| `npm run predeploy` | Builds before deployment |
| `npm run deploy` | Publishes `dist/` to GitHub Pages via `gh-pages` |

## 📁 Project Structure
```
Rijas_Portfolio/
├─ public/
├─ src/
│  ├─ components/        # Navigation, footer, theme toggle, animations
│  ├─ content/site-data.ts  # Central data for links, stats, projects
│  ├─ hooks/             # Reusable hooks (use-theme, use-mobile, toasts)
│  ├─ pages/             # Route-level views (Hero, Projects, Skills, etc.)
│  └─ lib/               # Shared utilities
├─ supabase/             # Supabase config (future integrations)
├─ vite.config.ts        # Vite + plugin configuration
└─ tailwind.config.ts    # Tailwind design tokens
```

## ✏️ Customization Tips
- Update hero stats, social links, projects, and resume sections inside [src/content/site-data.ts](src/content/site-data.ts).
- Add or tweak UI components under [src/components](src/components) to refine the visual language.
- Tailor Tailwind tokens or themes in [tailwind.config.ts](tailwind.config.ts) for brand colors and typography.

## 🌐 Deployment
1. Ensure `base: "/Rijas_Portfolio/"` remains in [vite.config.ts](vite.config.ts#L7) so GitHub Pages serves assets correctly.
2. Build and deploy:
	```bash
	npm run predeploy
	npm run deploy
	```
3. Set the Pages source to the `gh-pages` branch in the GitHub repository settings.

## 🤝 Contributing
Contributions and suggestions are welcome! Feel free to open an issue, create a pull request, or propose new sections that showcase additional accomplishments.

## 📫 Contact
- Portfolio repo: https://github.com/RijasMohamed/Rijas_Portfolio
- GitHub: https://github.com/RijasMohamed
- LinkedIn: https://www.linkedin.com/in/rijasmohamed/
- Email: rijas2244@gmail.com

If you build something cool with this codebase, let me know!*** End Patch
