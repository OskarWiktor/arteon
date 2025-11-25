# Arteon Agency Website

Modern, accessible website for Arteon - a web development and digital marketing agency based in Poland.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **React:** 19.0.0
- **TypeScript:** 5.x (strict mode)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Analytics:** Vercel Analytics & Speed Insights
- **Deployment:** Vercel

## Features

- ✅ **Accessibility:** WCAG 2.1 AA compliant with focus management, screen reader support, and keyboard navigation
- ✅ **SEO:** Schema.org structured data, dynamic sitemaps, OpenGraph metadata
- ✅ **Performance:** Optimized images, code splitting, lazy loading
- ✅ **Privacy:** GDPR-compliant cookie consent with Google Analytics integration
- ✅ **Responsive:** Mobile-first design with fluid typography

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd arteon
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file (copy from `.env.example`):
```bash
cp .env.example .env.local
```

4. Update environment variables in `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://www.arteonagency.pl
NEXT_PUBLIC_GA_ID=G-89KYXWSGYS
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
arteon/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── uslugi/            # Services pages
│   ├── realizacje/        # Projects/portfolio
│   ├── edukacja/          # Blog/education
│   └── kontakt/           # Contact page
├── components/
│   ├── ui/                # Reusable UI components
│   ├── sections/          # Page sections
│   ├── shared/            # Shared components (Navigation, Footer)
│   └── systems/          # System components (FocusManager, etc.)
├── data/                  # JSON data files
│   └── pl/               # Polish language data
├── lib/                   # Utility functions
├── types/                 # TypeScript type definitions
└── public/                # Static assets
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SITE_URL` | Base URL of the website | Yes |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID | No (defaults to G-89KYXWSGYS) |

## Code Quality

- **ESLint:** Comprehensive configuration with accessibility, security, and code quality rules
- **TypeScript:** Strict mode enabled with comprehensive type checking
- **Prettier:** Code formatting with Tailwind CSS plugin

## Accessibility

The project follows WCAG 2.1 AA standards with:
- Focus management on route changes
- Screen reader announcements
- Skip to content link
- Keyboard navigation support
- ARIA labels throughout
- Reduced motion support

## SEO

- Dynamic sitemap generation with `lastmod` dates
- Schema.org structured data (Organization, WebSite, Service, etc.)
- OpenGraph metadata
- Proper meta tags and canonical URLs

## Deployment

The project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

The build process automatically generates the sitemap after building.

## License

Private - All rights reserved

## Contact

- **Email:** kontakt@arteonagency.pl
- **Phone:** +48 516 466 255
- **Website:** https://www.arteonagency.pl
