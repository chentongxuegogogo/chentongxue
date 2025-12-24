# Personal Website - Three Drinks Concept

A minimalist personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Unique "Three Drinks" Interaction**: A homepage that splits into Work (Coffee), Life (Coke), and Family (Water).
- **Responsive Design**: Works on mobile and desktop with smooth animations.
- **Content Management**: All data is managed in `src/data/content.ts` for easy editing.
- **Tech Stack**:
  - Next.js 14 (App Router)
  - TypeScript
  - Tailwind CSS
  - Framer Motion

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## Customization

### Content
Edit `src/data/content.ts` to update your profile, photography links, articles, and resume data.

### Resume PDF
Place your `resume.pdf` file in the `public/` folder and update the path in `src/data/content.ts`.

### Images
Replace the Unsplash URLs in `src/data/content.ts` with your own images. You can put local images in the `public/` folder and reference them like `/my-image.jpg`.

## Deployment

### Vercel (Recommended)
1. Push this code to GitHub.
2. Go to Vercel and import the project.
3. It will automatically detect Next.js. Click Deploy.

### Netlify
1. Drag and drop the `out` folder (if using static export) or connect to Git.
2. Build command: `npm run build`
3. Publish directory: `.next`

