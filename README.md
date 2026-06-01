samuells.github.io
==================
# ClayHog Website

Portfolio website for Samuel Snopko - Product Builder / Head of Product / Adoption Engineer platform

## 🚀 Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   ├── logo.png
│   ├── og-image.png
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── brands/          # Brand logos (Adobe, Contentful, etc.)
│   │   ├── icons/           # UI icons
│   │   ├── images/          # Dashboard screenshots and visuals
│   │   ├── interface-ui/    # Product interface mockups
│   │   └── llm/             # LLM provider logos (GPT, Claude, etc.)
│   ├── components/
│   │   ├── blog/            # Blog-specific components
│   │   ├── mdx/             # MDX components
│   │   ├── BrandVisibilityChart.tsx
│   │   ├── DashboardMockup.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Pricing.astro
│   ├── content/
│   │   ├── integrations/    # Integration guides (Storyblok, etc.)
│   │   ├── learn/           # Educational content about GEO
│   │   └── solutions/       # Solution pages for different audiences
│   ├── layouts/
│   │   └── Layout.astro     # Main layout template
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   ├── about.astro
│   │   ├── features.astro
│   │   ├── pricing.astro
│   │   ├── integrations/    # Dynamic integration pages
│   │   ├── learn/           # Dynamic learn pages
│   │   └── solutions/       # Dynamic solution pages
│   └── styles/
│       ├── global.scss
│       └── tailwind.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

| Command           | Action                                           |
| :---------------- | :----------------------------------------------- |
| `npm install`     | Installs dependencies                            |
| `npm run dev`     | Starts local dev server at `localhost:4321`      |
| `npm run build`   | Build your production site to `./dist/`          |
| `npm run preview` | Preview your build locally, before deploying     |
| `npm run astro`   | Run CLI commands like `astro add`, `astro check` |

## 🛠️ Tech Stack

- **Framework**: Astro 5.1
- **Styling**: Tailwind CSS + SASS
- **UI Components**: React 19
- **Charts**: Recharts
- **Content**: MDX
- **Deployment**: Vercel
- **SEO**: astro-seo, sitemap

## 📝 Content Structure

- `/src/content/integrations/` - CMS and platform integration guides
- `/src/content/learn/` - Educational articles about GEO and AI search
- `/src/content/solutions/` - Use cases for agencies, marketing teams, and SEO teams

## 🔗 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [React Documentation](https://react.dev)

## 🔗 Live Website

- [www.clayhog.com](https://clayhog.com)
