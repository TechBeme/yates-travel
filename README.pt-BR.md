<div align="center">

# 🌴 Yates Travel · Criando Aventuras Inesquecíveis

**Landing page multilíngue moderna para uma agência de viagens pessoal, com design elegante, animações fluidas e internacionalização completa**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![next-intl](https://img.shields.io/badge/next--intl-4-5865F2)](https://next-intl.dev/)
[![Motion](https://img.shields.io/badge/Motion-12-FF6F61)](https://motion.dev/)

**🌐 [yates.techbe.me](https://yates.techbe.me)**

[Funcionalidades](#-funcionalidades) • [Stack Tecnológica](#%EF%B8%8F-stack-tecnológica) • [Instalação](#-instalação) • [Estrutura do Projeto](#-estrutura-do-projeto) • [Licença](#-licença)

**Idiomas:** [🇺🇸 English](README.md) • [🇪🇸 Español](README.es.md)

</div>

---

## 📋 Sumário

- [Visão Geral](#-visão-geral)
- [Sobre o Desenvolvedor](#-sobre-o-desenvolvedor)
- [Funcionalidades](#-funcionalidades)
- [Stack Tecnológica](#%EF%B8%8F-stack-tecnológica)
- [Instalação](#-instalação)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Design System](#-design-system)
- [Licença](#-licença)

---

## 🎯 Visão Geral

**Yates Travel** é uma landing page de alta performance para uma agência de viagens pessoal liderada por Brian Yates, consultor de viagens baseado no Arkansas, EUA. O site apresenta os serviços da agência (cruzeiros, resorts all-inclusive, férias Disney e roteiros personalizados), destaca destinos populares, conta a história do fundador e converte visitantes por meio de um formulário de contato validado.

**Principais diferenciais:**
- Internacionalização (i18n) completa com Inglês, Português e Espanhol
- Detecção automática do idioma do navegador com rotas prefixadas por locale
- Design editorial elegante combinando as tipografias Playfair Display e Inter
- Animações de scroll reveal com Motion (Framer Motion)
- Biblioteca de componentes construída sobre shadcn/ui e primitivos Radix
- Formulário de contato com validação de schema via React Hook Form e Zod
- SEO localizado: metadata por idioma, Open Graph, Twitter Cards e `hreflang`
- Geração totalmente estática para carregamento instantâneo

---

## 👨‍💻 Sobre o Desenvolvedor

<div align="center">

**Desenvolvido por Rafael Vieira (TechBeme)**

[![GitHub](https://img.shields.io/badge/GitHub-TechBeme-181717?logo=github)](https://github.com/TechBeme)
[![Fiverr](https://img.shields.io/badge/Fiverr-Tech__Be-1DBF73?logo=fiverr)](https://www.fiverr.com/tech_be)
[![Upwork](https://img.shields.io/badge/Upwork-Profile-14a800?logo=upwork)](https://www.upwork.com/freelancers/~01f0abcf70bbd95376)
[![Email](https://img.shields.io/badge/Email-contact@techbe.me-EA4335?logo=gmail)](mailto:contact@techbe.me)

**Desenvolvedor Full-Stack & Especialista em Automação com IA**

Especializado em **aplicações web modernas**, **sistemas de automação**, **integrações com IA** e **desenvolvimento full-stack**.

### 💼 Principais Competências

- 💻 Desenvolvimento Full-Stack (Next.js, React, TypeScript, Node.js)
- 🎨 Desenvolvimento de UI/UX Modernas (Tailwind CSS, Motion, shadcn/ui)
- 🔍 Web Scraping & Extração de Dados
- ⚡ Automação de Processos & Workflows
- 🤖 Integrações de IA (OpenAI, Anthropic, Google Gemini, sistemas RAG)
- 📊 Design & Otimização de Bancos de Dados
- 🚀 Performance, SEO & Analytics

### 🌍 Idiomas

🇺🇸 **English** • 🇧🇷 **Português** • 🇪🇸 **Español**

### 📬 Contato

**Email**: [contact@techbe.me](mailto:contact@techbe.me)

</div>

---

## ✨ Funcionalidades

### 🌐 Internacionalização (i18n)
- **3 Idiomas**: Inglês (padrão), Português e Espanhol
- **Detecção Automática**: middleware do next-intl detecta o idioma do navegador via `Accept-Language`
- **Rotas Dinâmicas**: URLs com prefixo de locale (`/en`, `/pt-BR`, `/es`)
- **Dicionários JSON**: todos os textos separados por idioma em `messages/`
- **Alternância de Idioma**: troca instantânea na navbar, mantendo a página atual
- **SEO Localizado**: meta tags, Open Graph, Twitter Cards e `hreflang` por idioma

### 🧭 Seções da Landing Page
- **Hero**: imagem em tela cheia, destaques de serviços e CTAs duplos
- **Parceiros**: faixa com marcas confiáveis de cruzeiros e resorts
- **Serviços**: cruzeiros, resorts all-inclusive, férias Disney, roteiros personalizados, tarifas para militares e viagens em grupo
- **Destinos**: galeria com 9 destinos populares e imagens otimizadas
- **Como Funciona**: processo de planejamento em três passos, do primeiro contato à viagem sem preocupações
- **Sobre**: a história do fundador Brian Yates com foto pessoal
- **Avaliações**: avaliações reais de viajantes vindas do Facebook
- **Contato**: formulário validado, além de telefone, email, endereço e redes sociais

### 📬 Formulário de Contato Inteligente
- **React Hook Form + Zod**: validação de schema com mensagens de erro localizadas
- **Envio via Mailto**: monta um email pronto para envio com o pedido de viagem do visitante
- **Feedback de Sucesso**: estado de confirmação após o envio

### 🎨 Design & Animações
- **Tipografia Editorial**: Playfair Display para títulos, Inter para textos
- **Scroll Reveal**: seções animam ao entrar na tela com Motion (Framer Motion)
- **shadcn/ui + Radix**: componentes acessíveis (accordion, avatar, cards, formulários)
- **Layout Responsivo**: experiência fluida do mobile ao desktop widescreen

### ⚡ Performance & SEO
- **Geração Estática**: todos os locales pré-renderizados com `generateStaticParams`
- **Otimização de Imagens**: `next/image` com remote patterns para assets do Unsplash
- **Canonical & Alternates**: URL canônica correta e alternativas de idioma por página

---

## 🛠️ Stack Tecnológica

### Frontend

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| ![Next.js](https://img.shields.io/badge/-Next.js-000000?logo=next.js&logoColor=white) | 16.2+ | Framework React com App Router |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white) | 5.0+ | Tipagem estática |
| ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black) | 19.2+ | Biblioteca de UI com Server Components |
| ![Tailwind CSS](https://img.shields.io/badge/-Tailwind-38B2AC?logo=tailwind-css&logoColor=white) | 4.0+ | Framework CSS utility-first |
| **next-intl** | 4.13+ | Internacionalização e roteamento por locale |
| **Motion** | 12.42+ | Animações e transições fluidas |

### UI & Formulários

| Tecnologia | Finalidade |
|------------|------------|
| **shadcn/ui + Radix UI** | Primitivos de componentes acessíveis |
| **React Hook Form** | Gerenciamento performático de formulários |
| **Zod** | Validação de schema com inferência tipada |
| **Hugeicons + React Icons** | Conjuntos de ícones |

### Ferramentas de Desenvolvimento

| Ferramenta | Finalidade |
|------------|------------|
| ![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?logo=eslint&logoColor=white) | Linting de código |
| **PostCSS** | Processamento de CSS |
| **TypeScript** | Verificação de tipos |

---

## 📦 Instalação

### Pré-requisitos

- **Node.js 20+** ([Download](https://nodejs.org/))
- **npm** ou **yarn**

### Instalação Rápida

```bash
# 1. Clone o repositório
git clone https://github.com/TechBeme/yates-travel.git
cd yates-travel

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) 🚀

### Build para Produção

```bash
# Build otimizado
npm run build

# Iniciar servidor de produção
npm run start
```

### Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Verificar erros de lint
```

---

## 📁 Estrutura do Projeto

```
yates-travel/
├── messages/
│   ├── en.json                     # Inglês (padrão)
│   ├── pt-BR.json                  # Português
│   └── es.json                     # Espanhol
│
├── public/
│   └── brian-yates.jpg             # Foto do fundador (seção Sobre)
│
├── src/
│   ├── proxy.ts                    # Middleware next-intl (detecção de locale)
│   ├── app/
│   │   ├── globals.css             # Design tokens e estilos globais
│   │   ├── icon.svg                # Favicon do site
│   │   └── [locale]/
│   │       ├── layout.tsx          # Layout com fontes, metadata e provider i18n
│   │       └── page.tsx            # Página principal compondo todas as seções
│   │
│   ├── components/
│   │   ├── site/
│   │   │   ├── navbar.tsx          # Navegação com alternância de idioma
│   │   │   ├── hero.tsx            # Hero com imagem em tela cheia e CTAs
│   │   │   ├── partners.tsx        # Faixa de marcas confiáveis
│   │   │   ├── services.tsx        # Grade de serviços
│   │   │   ├── destinations.tsx    # Galeria de destinos
│   │   │   ├── steps.tsx           # Processo de planejamento em três passos
│   │   │   ├── about.tsx           # História do fundador
│   │   │   ├── reviews.tsx         # Avaliações do Facebook
│   │   │   ├── contact.tsx         # Formulário de contato validado
│   │   │   ├── footer.tsx          # Footer com links e informações de contato
│   │   │   ├── logo.tsx            # Logo da marca
│   │   │   └── reveal.tsx          # Wrapper de animação scroll reveal
│   │   └── ui/                     # Componentes shadcn/ui (button, card, input...)
│   │
│   ├── i18n/
│   │   ├── routing.ts              # Configuração de locales (en, pt-BR, es)
│   │   ├── navigation.ts           # Helpers de navegação com locale
│   │   └── request.ts              # Carregamento de dicionário por request
│   │
│   └── lib/
│       ├── site.ts                 # Dados do negócio, contatos e imagens
│       └── utils.ts                # Funções utilitárias
│
├── next.config.ts                  # Configuração Next.js + next-intl
├── components.json                 # Configuração shadcn/ui
├── tsconfig.json                   # Configuração TypeScript
├── eslint.config.mjs               # Configuração ESLint
├── postcss.config.mjs              # Configuração PostCSS
└── package.json                    # Dependências e scripts
```

---

## 🎨 Design System

### Paleta de Cores

| Token | Cor | Uso |
|-------|-----|-----|
| `--primary` | `oklch(0.46 0.11 235)` | Azul oceano: CTAs, links, destaques |
| `--foreground` | `oklch(0.145 0 0)` | Textos principais |
| `--background` | `oklch(1 0 0)` | Fundo principal |
| `--secondary` | `oklch(0.96 0.012 225)` | Superfícies em azul suave |
| `--accent` | `oklch(0.955 0.02 220)` | Estados de hover e ênfase sutil |

### Tipografia

- **Títulos**: Playfair Display (serifada editorial para títulos)
- **Corpo**: Inter (sans-serif limpa para leitura)

---

## 📝 Licença

**Licença Proprietária: Todos os Direitos Reservados**

Copyright © 2026 Rafael Vieira (TechBeme)

### ❌ Restrições

- Proibido uso comercial sem permissão escrita
- Proibido modificações ou trabalhos derivados
- Proibido distribuição, sublicenciamento ou hospedagem pública
- Proibida engenharia reversa ou descompilação

### ✅ Uso Permitido

- Visualizar código-fonte para fins educacionais
- Executar localmente para estudo pessoal e não comercial
- Fork para aprendizado privado e pessoal

### 📧 Licenciamento Comercial

Para uso comercial, desenvolvimento customizado ou consultas de licenciamento:

**Contato**: [contact@techbe.me](mailto:contact@techbe.me)

---

## 🙏 Agradecimentos

Construído com tecnologias open-source incríveis:

[Next.js](https://nextjs.org/) • [React](https://reactjs.org/) • [TypeScript](https://www.typescriptlang.org/) • [Tailwind CSS](https://tailwindcss.com/) • [next-intl](https://next-intl.dev/) • [Motion](https://motion.dev/) • [shadcn/ui](https://ui.shadcn.com/) • [Vercel](https://vercel.com/)

---

<div align="center">

**Desenvolvido por [Rafael Vieira](https://github.com/TechBeme)**

[![GitHub](https://img.shields.io/badge/GitHub-TechBeme-181717?logo=github)](https://github.com/TechBeme)
[![Fiverr](https://img.shields.io/badge/Fiverr-Tech__Be-1DBF73?logo=fiverr)](https://www.fiverr.com/tech_be)
[![Upwork](https://img.shields.io/badge/Upwork-Profile-14a800?logo=upwork)](https://www.upwork.com/freelancers/~01f0abcf70bbd95376)
[![Email](https://img.shields.io/badge/Email-contact@techbe.me-EA4335?logo=gmail)](mailto:contact@techbe.me)

</div>
