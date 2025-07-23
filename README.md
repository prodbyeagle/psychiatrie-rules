# Eagle Next.js Template

A modern, opinionated Next.js 14+ template featuring TypeScript, app directory, dark/light/system theme toggle, and a clean, extendable component structure. Built for rapid prototyping and scalable production apps.

---

## Features

- **Next.js 14+** with `/app` directory and server components
- **TypeScript** for type safety
- **Theme Toggle** (light/dark/system) using [next-themes](https://github.com/pacocoursey/next-themes)
- **Reusable UI Components** (Button, Dropdown, Card, etc.)
- **Lucide Icons** for modern SVG icons
- **Custom Hooks** (e.g., `useHasMounted`)
- **Tailwind CSS** for utility-first styling
- **Ready-to-edit Home Page** with live reload
- **Accessible, semantic markup**
- **Easy to extend and customize**

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/prodbyeagle/next-template.git
cd next-template
```

### 2. Install dependencies

```bash
npm install
# or
bun i // bun update --latest
```

### 3. Run the development server

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Project Structure

```
src/
  app/                # App directory (Next.js 14+)
    layout.tsx        # Root layout
    page.tsx          # Home page
  components/
    eagle/            # Custom eagle components (e.g., theme-toggle)
    ui/               # Reusable UI primitives (button, dropdown, etc.)
  hooks/              # Custom React hooks
  lib/                # Utilities and helpers
public/               # Static assets
```

---

## Customization

- **UI Components:** Extend or modify components in [`src/components/ui/`](src/components/ui/) for your design system.
- **Home Page:** Start building your app in [`src/app/page.tsx`](src/app/page.tsx).

---

## Dependencies

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [lucide-react](https://lucide.dev/)

---

## Author

Created by **prodbyeagle**.

---

## License

[MIT](LICENSE)
