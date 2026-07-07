<div align="center">

# 🌴 Yates Travel · Crafting Unforgettable Adventures

**Modern multilingual landing page for a personal travel agency, built with elegant design, smooth animations and full internationalization**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![next-intl](https://img.shields.io/badge/next--intl-4-5865F2)](https://next-intl.dev/)
[![Motion](https://img.shields.io/badge/Motion-12-FF6F61)](https://motion.dev/)

**🌐 [yates.techbe.me](https://yates.techbe.me)**

[Features](#-features) • [Tech Stack](#%EF%B8%8F-tech-stack) • [Installation](#-installation) • [Project Structure](#-project-structure) • [License](#-license)

**Languages:** [🇧🇷 Português](README.pt-BR.md) • [🇪🇸 Español](README.es.md)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [About the Developer](#-about-the-developer)
- [Features](#-features)
- [Tech Stack](#%EF%B8%8F-tech-stack)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Design System](#-design-system)
- [License](#-license)

---

## 🎯 Overview

**Yates Travel** is a high-performance landing page for a personal travel agency led by Brian Yates, a travel advisor based in Arkansas, USA. The site presents the agency's services (cruises, all-inclusive resorts, Disney vacations and custom itineraries), showcases popular destinations, tells the founder's story and converts visitors through a validated contact form.

**Key highlights:**
- Complete internationalization (i18n) with English, Portuguese and Spanish
- Automatic browser language detection with locale-prefixed routes
- Elegant editorial design combining Playfair Display and Inter typography
- Scroll-reveal animations powered by Motion (Framer Motion)
- Component library built on shadcn/ui and Radix primitives
- Contact form with schema validation via React Hook Form and Zod
- Localized SEO: per-language metadata, Open Graph, Twitter Cards and `hreflang`
- Fully static generation for instant page loads

---

## 👨‍💻 About the Developer

<div align="center">

**Developed by Rafael Vieira (TechBeme)**

[![GitHub](https://img.shields.io/badge/GitHub-TechBeme-181717?logo=github)](https://github.com/TechBeme)
[![Fiverr](https://img.shields.io/badge/Fiverr-Tech__Be-1DBF73?logo=fiverr)](https://www.fiverr.com/tech_be)
[![Upwork](https://img.shields.io/badge/Upwork-Profile-14a800?logo=upwork)](https://www.upwork.com/freelancers/~01f0abcf70bbd95376)
[![Email](https://img.shields.io/badge/Email-contact@techbe.me-EA4335?logo=gmail)](mailto:contact@techbe.me)

**Full-Stack Developer & AI Automation Specialist**

Specialized in **modern web applications**, **automation systems**, **AI integrations** and **full-stack development**.

### 💼 Core Expertise

- 💻 Full-Stack Development (Next.js, React, TypeScript, Node.js)
- 🎨 Modern UI/UX Development (Tailwind CSS, Motion, shadcn/ui)
- 🔍 Web Scraping & Data Extraction
- ⚡ Process Automation & Workflows
- 🤖 AI Integrations (OpenAI, Anthropic, Google Gemini, RAG systems)
- 📊 Database Design & Optimization
- 🚀 Performance, SEO & Analytics

### 🌍 Languages

🇺🇸 **English** • 🇧🇷 **Português** • 🇪🇸 **Español**

### 📬 Contact

**Email**: [contact@techbe.me](mailto:contact@techbe.me)

</div>

---

## ✨ Features

### 🌐 Internationalization (i18n)
- **3 Languages**: English (default), Portuguese and Spanish
- **Automatic Detection**: next-intl middleware detects the browser language via `Accept-Language`
- **Dynamic Routes**: locale-prefixed URLs (`/en`, `/pt-BR`, `/es`)
- **JSON Dictionaries**: all copy separated by language in `messages/`
- **Locale Switcher**: instant language toggle in the navbar, keeping the current page
- **Localized SEO**: meta tags, Open Graph, Twitter Cards and `hreflang` per language

### 🧭 Landing Page Sections
- **Hero**: full-screen imagery, service highlights and dual CTAs
- **Partners**: strip of trusted cruise lines and resort brands
- **Services**: cruises, all-inclusive resorts, Disney vacations, custom itineraries, service member rates and group travel
- **Destinations**: gallery of 9 popular destinations with optimized images
- **How It Works**: three-step planning process from first contact to worry-free travel
- **About**: the story of founder Brian Yates with personal photo
- **Reviews**: real traveler reviews sourced from Facebook
- **Contact**: validated form plus phone, email, address and social links

### 📬 Smart Contact Form
- **React Hook Form + Zod**: schema validation with localized error messages
- **Mailto Handoff**: composes a ready-to-send email with the visitor's trip request
- **Success Feedback**: confirmation state after submission

### 🎨 Design & Animations
- **Editorial Typography**: Playfair Display for headlines, Inter for body text
- **Scroll Reveal**: sections animate into view with Motion (Framer Motion)
- **shadcn/ui + Radix**: accessible components (accordion, avatar, cards, forms)
- **Responsive Layout**: fluid experience from mobile to widescreen desktop

### ⚡ Performance & SEO
- **Static Generation**: every locale pre-rendered with `generateStaticParams`
- **Image Optimization**: `next/image` with remote patterns for Unsplash assets
- **Canonical & Alternates**: correct canonical URL and language alternates per page

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| ![Next.js](https://img.shields.io/badge/-Next.js-000000?logo=next.js&logoColor=white) | 16.2+ | React framework with App Router |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white) | 5.0+ | Static typing |
| ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black) | 19.2+ | UI library with Server Components |
| ![Tailwind CSS](https://img.shields.io/badge/-Tailwind-38B2AC?logo=tailwind-css&logoColor=white) | 4.0+ | Utility-first CSS framework |
| **next-intl** | 4.13+ | Internationalization and locale routing |
| **Motion** | 12.42+ | Fluid animations and transitions |

### UI & Forms

| Technology | Purpose |
|------------|---------|
| **shadcn/ui + Radix UI** | Accessible component primitives |
| **React Hook Form** | Performant form state management |
| **Zod** | Schema validation with typed inference |
| **Hugeicons + React Icons** | Icon sets |

### Development Tools

| Tool | Purpose |
|------|---------|
| ![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?logo=eslint&logoColor=white) | Code linting |
| **PostCSS** | CSS processing |
| **TypeScript** | Type checking |

---

## 📦 Installation

### Prerequisites

- **Node.js 20+** ([Download](https://nodejs.org/))
- **npm** or **yarn**

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/TechBeme/yates-travel.git
cd yates-travel

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🚀

### Production Build

```bash
# Optimized build
npm run build

# Start production server
npm run start
```

### Available Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # Check lint errors
```

---

## 📁 Project Structure

```
yates-travel/
├── messages/
│   ├── en.json                     # English (default)
│   ├── pt-BR.json                  # Portuguese
│   └── es.json                     # Spanish
│
├── public/
│   └── brian-yates.jpg             # Founder photo (About section)
│
├── src/
│   ├── proxy.ts                    # next-intl middleware (locale detection)
│   ├── app/
│   │   ├── globals.css             # Design tokens and global styles
│   │   ├── icon.svg                # Site favicon
│   │   └── [locale]/
│   │       ├── layout.tsx          # Layout with fonts, metadata and i18n provider
│   │       └── page.tsx            # Main page composing all sections
│   │
│   ├── components/
│   │   ├── site/
│   │   │   ├── navbar.tsx          # Navigation with locale switcher
│   │   │   ├── hero.tsx            # Hero with full-screen imagery and CTAs
│   │   │   ├── partners.tsx        # Trusted brands strip
│   │   │   ├── services.tsx        # Services grid
│   │   │   ├── destinations.tsx    # Destination gallery
│   │   │   ├── steps.tsx           # Three-step planning process
│   │   │   ├── about.tsx           # Founder story
│   │   │   ├── reviews.tsx         # Facebook reviews
│   │   │   ├── contact.tsx         # Validated contact form
│   │   │   ├── footer.tsx          # Footer with links and contact info
│   │   │   ├── logo.tsx            # Brand logo
│   │   │   └── reveal.tsx          # Scroll-reveal animation wrapper
│   │   └── ui/                     # shadcn/ui components (button, card, input...)
│   │
│   ├── i18n/
│   │   ├── routing.ts              # Locale configuration (en, pt-BR, es)
│   │   ├── navigation.ts           # Locale-aware navigation helpers
│   │   └── request.ts              # Per-request dictionary loading
│   │
│   └── lib/
│       ├── site.ts                 # Business data, contact info and images
│       └── utils.ts                # Utility helpers
│
├── next.config.ts                  # Next.js + next-intl configuration
├── components.json                 # shadcn/ui configuration
├── tsconfig.json                   # TypeScript configuration
├── eslint.config.mjs               # ESLint configuration
├── postcss.config.mjs              # PostCSS configuration
└── package.json                    # Dependencies and scripts
```

---

## 🎨 Design System

### Color Palette

| Token | Color | Usage |
|-------|-------|-------|
| `--primary` | `oklch(0.46 0.11 235)` | Ocean blue: CTAs, links, highlights |
| `--foreground` | `oklch(0.145 0 0)` | Primary text |
| `--background` | `oklch(1 0 0)` | Main background |
| `--secondary` | `oklch(0.96 0.012 225)` | Soft blue surfaces |
| `--accent` | `oklch(0.955 0.02 220)` | Hover states and subtle emphasis |

### Typography

- **Headings**: Playfair Display (editorial serif for titles)
- **Body**: Inter (clean sans-serif for reading)

---

## 📝 License

**Proprietary License: All Rights Reserved**

Copyright © 2026 Rafael Vieira (TechBeme)

### ❌ Restrictions

- Commercial use prohibited without written permission
- Modifications or derivative works prohibited
- Distribution, sublicensing or public hosting prohibited
- Reverse engineering or decompilation prohibited

### ✅ Permitted Use

- Viewing source code for educational purposes
- Running locally for personal, non-commercial study
- Forking for private, personal learning

### 📧 Commercial Licensing

For commercial use, custom development or licensing inquiries:

**Contact**: [contact@techbe.me](mailto:contact@techbe.me)

---

## 🙏 Acknowledgments

Built with amazing open-source technologies:

[Next.js](https://nextjs.org/) • [React](https://reactjs.org/) • [TypeScript](https://www.typescriptlang.org/) • [Tailwind CSS](https://tailwindcss.com/) • [next-intl](https://next-intl.dev/) • [Motion](https://motion.dev/) • [shadcn/ui](https://ui.shadcn.com/) • [Vercel](https://vercel.com/)

---

<div align="center">

**Developed by [Rafael Vieira](https://github.com/TechBeme)**

[![GitHub](https://img.shields.io/badge/GitHub-TechBeme-181717?logo=github)](https://github.com/TechBeme)
[![Fiverr](https://img.shields.io/badge/Fiverr-Tech__Be-1DBF73?logo=fiverr)](https://www.fiverr.com/tech_be)
[![Upwork](https://img.shields.io/badge/Upwork-Profile-14a800?logo=upwork)](https://www.upwork.com/freelancers/~01f0abcf70bbd95376)
[![Email](https://img.shields.io/badge/Email-contact@techbe.me-EA4335?logo=gmail)](mailto:contact@techbe.me)

</div>
