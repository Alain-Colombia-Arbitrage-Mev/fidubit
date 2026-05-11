# TRACKWISE

Banking-as-a-Service (BaaS) infrastructure platform built with Astro + TypeScript + Tailwind CSS.

Trackwise LLC is a Wyoming-licensed Money Services Business (FinCEN MSB #31000299058422) providing embedded financial APIs, card issuance, multi-currency accounts, and cross-border payment rails.

## 🚀 Features

- **Card Issuance** - Prepaid and corporate card programs with BIN sponsorship
- **BaaS APIs** - Embedded banking, ledger, IBAN/ACH/SEPA rails, KYC/AML
- **Blockchain Architecture** - Smart contracts, RWA tokenization, stablecoin infrastructure
- **Staff Augmentation** - Senior engineering talent for fintech projects
- **Music & Media** - Digital distribution and marketing network
- **Corporate Services** - Company incorporation in Wyoming, Delaware, and offshore jurisdictions

## 🛠️ Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Iconify](https://iconify.design/) - Icons

## 📦 Project Structure

```
trackwise/
├── src/
│   ├── components/
│   │   ├── layout/      # Header, Sidebar, Footer
│   │   ├── sections/    # Page sections
│   │   └── ui/          # Reusable UI components
│   ├── data/            # Site data and content
│   ├── layouts/         # Page layouts
│   ├── pages/           # Routes
│   ├── styles/          # Global CSS
│   └── types/           # TypeScript definitions
├── public/              # Static assets
└── package.json
```

## 🧞 Commands

| Command                | Action                                       |
| :--------------------- | :------------------------------------------- |
| `npm install`          | Install dependencies                         |
| `npm run dev`          | Start dev server at `localhost:4321`         |
| `npm run build`        | Build production site to `./dist/`           |
| `npm run preview`      | Preview build locally before deploying       |

## 🌐 Deployment

This project is configured for deployment on **Cloudflare Pages**.

### Deploy to Cloudflare Pages

1. Push to GitHub
2. Connect repository in Cloudflare Pages dashboard
3. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** `18` or higher

## 🏢 Company

- **Legal name:** Trackwise LLC
- **Jurisdiction:** Wyoming, United States
- **License:** Money Services Business (MSB) — FinCEN registration **#31000299058422**
- **Contact:** info@trackwise.finance
- **Website:** https://trackwise.finance

## 📄 License

Proprietary - Trackwise LLC.
