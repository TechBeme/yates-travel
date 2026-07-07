<div align="center">

# 🌴 Yates Travel · Creando Aventuras Inolvidables

**Landing page multilingüe moderna para una agencia de viajes personal, con diseño elegante, animaciones fluidas e internacionalización completa**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![next-intl](https://img.shields.io/badge/next--intl-4-5865F2)](https://next-intl.dev/)
[![Motion](https://img.shields.io/badge/Motion-12-FF6F61)](https://motion.dev/)

**🌐 [yates.techbe.me](https://yates.techbe.me)**

[Funcionalidades](#-funcionalidades) • [Stack Tecnológico](#%EF%B8%8F-stack-tecnológico) • [Instalación](#-instalación) • [Estructura del Proyecto](#-estructura-del-proyecto) • [Licencia](#-licencia)

**Idiomas:** [🇺🇸 English](README.md) • [🇧🇷 Português](README.pt-BR.md)

</div>

---

## 📋 Índice

- [Visión General](#-visión-general)
- [Sobre el Desarrollador](#-sobre-el-desarrollador)
- [Funcionalidades](#-funcionalidades)
- [Stack Tecnológico](#%EF%B8%8F-stack-tecnológico)
- [Instalación](#-instalación)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Design System](#-design-system)
- [Licencia](#-licencia)

---

## 🎯 Visión General

**Yates Travel** es una landing page de alto rendimiento para una agencia de viajes personal liderada por Brian Yates, asesor de viajes con base en Arkansas, EE. UU. El sitio presenta los servicios de la agencia (cruceros, resorts todo incluido, vacaciones Disney e itinerarios personalizados), destaca destinos populares, cuenta la historia del fundador y convierte visitantes mediante un formulario de contacto validado.

**Principales diferenciales:**
- Internacionalización (i18n) completa con Inglés, Portugués y Español
- Detección automática del idioma del navegador con rutas prefijadas por locale
- Diseño editorial elegante combinando las tipografías Playfair Display e Inter
- Animaciones de scroll reveal con Motion (Framer Motion)
- Biblioteca de componentes construida sobre shadcn/ui y primitivos Radix
- Formulario de contacto con validación de schema vía React Hook Form y Zod
- SEO localizado: metadata por idioma, Open Graph, Twitter Cards y `hreflang`
- Generación totalmente estática para carga instantánea

---

## 👨‍💻 Sobre el Desarrollador

<div align="center">

**Desarrollado por Rafael Vieira (TechBeme)**

[![GitHub](https://img.shields.io/badge/GitHub-TechBeme-181717?logo=github)](https://github.com/TechBeme)
[![Fiverr](https://img.shields.io/badge/Fiverr-Tech__Be-1DBF73?logo=fiverr)](https://www.fiverr.com/tech_be)
[![Upwork](https://img.shields.io/badge/Upwork-Profile-14a800?logo=upwork)](https://www.upwork.com/freelancers/~01f0abcf70bbd95376)
[![Email](https://img.shields.io/badge/Email-contact@techbe.me-EA4335?logo=gmail)](mailto:contact@techbe.me)

**Desarrollador Full-Stack & Especialista en Automatización con IA**

Especializado en **aplicaciones web modernas**, **sistemas de automatización**, **integraciones con IA** y **desarrollo full-stack**.

### 💼 Competencias Principales

- 💻 Desarrollo Full-Stack (Next.js, React, TypeScript, Node.js)
- 🎨 Desarrollo de UI/UX Modernas (Tailwind CSS, Motion, shadcn/ui)
- 🔍 Web Scraping & Extracción de Datos
- ⚡ Automatización de Procesos & Workflows
- 🤖 Integraciones de IA (OpenAI, Anthropic, Google Gemini, sistemas RAG)
- 📊 Diseño & Optimización de Bases de Datos
- 🚀 Performance, SEO & Analytics

### 🌍 Idiomas

🇺🇸 **English** • 🇧🇷 **Português** • 🇪🇸 **Español**

### 📬 Contacto

**Email**: [contact@techbe.me](mailto:contact@techbe.me)

</div>

---

## ✨ Funcionalidades

### 🌐 Internacionalización (i18n)
- **3 Idiomas**: Inglés (predeterminado), Portugués y Español
- **Detección Automática**: el middleware de next-intl detecta el idioma del navegador vía `Accept-Language`
- **Rutas Dinámicas**: URLs con prefijo de locale (`/en`, `/pt-BR`, `/es`)
- **Diccionarios JSON**: todos los textos separados por idioma en `messages/`
- **Selector de Idioma**: cambio instantáneo en la navbar, manteniendo la página actual
- **SEO Localizado**: meta tags, Open Graph, Twitter Cards y `hreflang` por idioma

### 🧭 Secciones de la Landing Page
- **Hero**: imagen a pantalla completa, destacados de servicios y CTAs dobles
- **Partners**: franja con marcas confiables de cruceros y resorts
- **Servicios**: cruceros, resorts todo incluido, vacaciones Disney, itinerarios personalizados, tarifas para militares y viajes en grupo
- **Destinos**: galería con 9 destinos populares e imágenes optimizadas
- **Cómo Funciona**: proceso de planificación en tres pasos, del primer contacto al viaje sin preocupaciones
- **Sobre**: la historia del fundador Brian Yates con foto personal
- **Reseñas**: reseñas reales de viajeros provenientes de Facebook
- **Contacto**: formulario validado, además de teléfono, email, dirección y redes sociales

### 📬 Formulario de Contacto Inteligente
- **React Hook Form + Zod**: validación de schema con mensajes de error localizados
- **Envío vía Mailto**: compone un email listo para enviar con la solicitud de viaje del visitante
- **Feedback de Éxito**: estado de confirmación tras el envío

### 🎨 Diseño & Animaciones
- **Tipografía Editorial**: Playfair Display para títulos, Inter para textos
- **Scroll Reveal**: las secciones se animan al entrar en pantalla con Motion (Framer Motion)
- **shadcn/ui + Radix**: componentes accesibles (accordion, avatar, cards, formularios)
- **Layout Responsivo**: experiencia fluida del móvil al escritorio widescreen

### ⚡ Performance & SEO
- **Generación Estática**: todos los locales pre-renderizados con `generateStaticParams`
- **Optimización de Imágenes**: `next/image` con remote patterns para assets de Unsplash
- **Canonical & Alternates**: URL canónica correcta y alternativas de idioma por página

---

## 🛠️ Stack Tecnológico

### Frontend

| Tecnología | Versión | Finalidad |
|------------|---------|-----------|
| ![Next.js](https://img.shields.io/badge/-Next.js-000000?logo=next.js&logoColor=white) | 16.2+ | Framework React con App Router |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white) | 5.0+ | Tipado estático |
| ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black) | 19.2+ | Biblioteca de UI con Server Components |
| ![Tailwind CSS](https://img.shields.io/badge/-Tailwind-38B2AC?logo=tailwind-css&logoColor=white) | 4.0+ | Framework CSS utility-first |
| **next-intl** | 4.13+ | Internacionalización y enrutamiento por locale |
| **Motion** | 12.42+ | Animaciones y transiciones fluidas |

### UI & Formularios

| Tecnología | Finalidad |
|------------|-----------|
| **shadcn/ui + Radix UI** | Primitivos de componentes accesibles |
| **React Hook Form** | Gestión eficiente de formularios |
| **Zod** | Validación de schema con inferencia tipada |
| **Hugeicons + React Icons** | Conjuntos de iconos |

### Herramientas de Desarrollo

| Herramienta | Finalidad |
|-------------|-----------|
| ![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?logo=eslint&logoColor=white) | Linting de código |
| **PostCSS** | Procesamiento de CSS |
| **TypeScript** | Verificación de tipos |

---

## 📦 Instalación

### Requisitos Previos

- **Node.js 20+** ([Descargar](https://nodejs.org/))
- **npm** o **yarn**

### Instalación Rápida

```bash
# 1. Clona el repositorio
git clone https://github.com/TechBeme/yates-travel.git
cd yates-travel

# 2. Instala las dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm run dev
```

Accede a [http://localhost:3000](http://localhost:3000) 🚀

### Build para Producción

```bash
# Build optimizado
npm run build

# Iniciar servidor de producción
npm run start
```

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Verificar errores de lint
```

---

## 📁 Estructura del Proyecto

```
yates-travel/
├── messages/
│   ├── en.json                     # Inglés (predeterminado)
│   ├── pt-BR.json                  # Portugués
│   └── es.json                     # Español
│
├── public/
│   └── brian-yates.jpg             # Foto del fundador (sección Sobre)
│
├── src/
│   ├── proxy.ts                    # Middleware next-intl (detección de locale)
│   ├── app/
│   │   ├── globals.css             # Design tokens y estilos globales
│   │   ├── icon.svg                # Favicon del sitio
│   │   └── [locale]/
│   │       ├── layout.tsx          # Layout con fuentes, metadata y provider i18n
│   │       └── page.tsx            # Página principal que compone todas las secciones
│   │
│   ├── components/
│   │   ├── site/
│   │   │   ├── navbar.tsx          # Navegación con selector de idioma
│   │   │   ├── hero.tsx            # Hero con imagen a pantalla completa y CTAs
│   │   │   ├── partners.tsx        # Franja de marcas confiables
│   │   │   ├── services.tsx        # Cuadrícula de servicios
│   │   │   ├── destinations.tsx    # Galería de destinos
│   │   │   ├── steps.tsx           # Proceso de planificación en tres pasos
│   │   │   ├── about.tsx           # Historia del fundador
│   │   │   ├── reviews.tsx         # Reseñas de Facebook
│   │   │   ├── contact.tsx         # Formulario de contacto validado
│   │   │   ├── footer.tsx          # Footer con enlaces e información de contacto
│   │   │   ├── logo.tsx            # Logo de la marca
│   │   │   └── reveal.tsx          # Wrapper de animación scroll reveal
│   │   └── ui/                     # Componentes shadcn/ui (button, card, input...)
│   │
│   ├── i18n/
│   │   ├── routing.ts              # Configuración de locales (en, pt-BR, es)
│   │   ├── navigation.ts           # Helpers de navegación con locale
│   │   └── request.ts              # Carga de diccionario por request
│   │
│   └── lib/
│       ├── site.ts                 # Datos del negocio, contactos e imágenes
│       └── utils.ts                # Funciones utilitarias
│
├── next.config.ts                  # Configuración Next.js + next-intl
├── components.json                 # Configuración shadcn/ui
├── tsconfig.json                   # Configuración TypeScript
├── eslint.config.mjs               # Configuración ESLint
├── postcss.config.mjs              # Configuración PostCSS
└── package.json                    # Dependencias y scripts
```

---

## 🎨 Design System

### Paleta de Colores

| Token | Color | Uso |
|-------|-------|-----|
| `--primary` | `oklch(0.46 0.11 235)` | Azul océano: CTAs, enlaces, destacados |
| `--foreground` | `oklch(0.145 0 0)` | Textos principales |
| `--background` | `oklch(1 0 0)` | Fondo principal |
| `--secondary` | `oklch(0.96 0.012 225)` | Superficies en azul suave |
| `--accent` | `oklch(0.955 0.02 220)` | Estados de hover y énfasis sutil |

### Tipografía

- **Títulos**: Playfair Display (serif editorial para títulos)
- **Cuerpo**: Inter (sans-serif limpia para lectura)

---

## 📝 Licencia

**Licencia Propietaria: Todos los Derechos Reservados**

Copyright © 2026 Rafael Vieira (TechBeme)

### ❌ Restricciones

- Prohibido el uso comercial sin permiso escrito
- Prohibidas las modificaciones o trabajos derivados
- Prohibida la distribución, sublicencia u hospedaje público
- Prohibida la ingeniería inversa o descompilación

### ✅ Uso Permitido

- Ver el código fuente con fines educativos
- Ejecutar localmente para estudio personal y no comercial
- Fork para aprendizaje privado y personal

### 📧 Licenciamiento Comercial

Para uso comercial, desarrollo personalizado o consultas de licenciamiento:

**Contacto**: [contact@techbe.me](mailto:contact@techbe.me)

---

## 🙏 Agradecimientos

Construido con increíbles tecnologías open-source:

[Next.js](https://nextjs.org/) • [React](https://reactjs.org/) • [TypeScript](https://www.typescriptlang.org/) • [Tailwind CSS](https://tailwindcss.com/) • [next-intl](https://next-intl.dev/) • [Motion](https://motion.dev/) • [shadcn/ui](https://ui.shadcn.com/) • [Vercel](https://vercel.com/)

---

<div align="center">

**Desarrollado por [Rafael Vieira](https://github.com/TechBeme)**

[![GitHub](https://img.shields.io/badge/GitHub-TechBeme-181717?logo=github)](https://github.com/TechBeme)
[![Fiverr](https://img.shields.io/badge/Fiverr-Tech__Be-1DBF73?logo=fiverr)](https://www.fiverr.com/tech_be)
[![Upwork](https://img.shields.io/badge/Upwork-Profile-14a800?logo=upwork)](https://www.upwork.com/freelancers/~01f0abcf70bbd95376)
[![Email](https://img.shields.io/badge/Email-contact@techbe.me-EA4335?logo=gmail)](mailto:contact@techbe.me)

</div>
