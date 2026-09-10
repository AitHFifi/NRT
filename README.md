# 🛩️ NRT Gabon - Nationale Régionale de Transport

[![CI Pipeline](https://github.com/AitHFifi/NRT/actions/workflows/ci.yml/badge.svg)](https://github.com/AitHFifi/NRT/actions/workflows/ci.yml)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/AitHFifi/NRT/releases/tag/v1.0.0)
[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.14.2-88ce02?logo=greensock)](https://gsap.com/)
[![Lenis](https://img.shields.io/badge/Lenis-Smooth%20Scroll-black)](https://lenis.darkroom.engineering/)

**NRT Gabon (Nationale Régionale de Transport)** is a luxury aviation and domestic flight booking platform designed for Gabon's flagship regional air operator. Founded in 2002, NRT connects the nation's political hub in Libreville to all nine administrative provinces, economic oil corridors, and interior mining basins.

---

## ✨ Key Platform Features

- 🛫 **Cinematic Parallax Hero**: Multi-layered cockpit and cloud immersion built with GSAP ScrollTrigger, Lenis smooth scrolling, and Framer Motion micro-interactions.
- 🗺️ **Interactive Geospatial Route Map**: Custom SVG cartography mapping Libreville (LBV) to all regional provincial airports (Port-Gentil, Franceville, Moanda, Oyem, Makokou, Mouila, Tchibanga) with animated flight vectors and duration metrics.
- 🎫 **Dual-Mode Booking Engine**: Unified interface for reserving scheduled domestic flights and requesting bespoke VIP private charters with interactive seat configuration preview.
- ✈️ **Dynamic Fleet Showcase**: Interactive carousel highlighting the ATR 72-600, Embraer ERJ-145, and Beechcraft King Air 350i with technical specs, 360° cabin hotspot inspections, and Libreville radar range circle projections.
- ⏱️ **Live Flight Tracker**: Real-time departures and arrivals monitoring board with live status badges (On Time, Scheduled, Boarding).
- 🌐 **Bilingual Localization & Currency Engine**: Seamless real-time switching between French (Français) and English with automatic XAF (Central African Franc) / EUR currency conversion.
- 🚑 **Specialized Aviation Services**: Comprehensive portfolios for corporate mining shuttles (Comilog/Eramet), oil & gas transport (TotalEnergies/Perenco), air ambulance medevac, and high-priority cargo.

---

## 🛠️ Architecture & Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & CSS Modules |
| **Animation** | [GSAP 3.14](https://gsap.com/) & [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) |
| **Transitions** | [Framer Motion 12](https://www.framer.com/motion/) |
| **Smooth Scroll** | [Lenis 1.3](https://lenis.darkroom.engineering/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **CI / CD** | GitHub Actions Automated Linting & Build Verification |

---

## 📂 Project Structure

```text
NRT/
├── .github/
│   ├── ISSUE_TEMPLATE/     # Structured bug report & feature request forms
│   ├── workflows/          # GitHub Actions CI pipeline
│   └── pull_request_template.md
├── public/                 # Static vector assets
└── src/
    ├── app/                # Next.js App Router
    │   ├── Home/           # Page sections
    │   ├── providers/      # Lenis & i18n/Currency context providers
    │   ├── globals.css     # Dark luxury design tokens
    │   ├── layout.js       # Root HTML & font configuration
    │   └── page.js         # Single-page orchestrated landing flow
    ├── assets/images/      # Cockpit masks, parallax layers, SVG brand logo
    ├── components/
    │   ├── Booking/        # Booking widget, search results, modals
    │   ├── Fleet/          # Fleet showcase, radar range, seat maps, 360 view
    │   ├── FlightStatus/   # Real-time flight tracking board
    │   ├── Footer/         # Regional operational contacts & desk
    │   ├── Map/            # SVG Gabon vector map & flight trajectories
    │   ├── Services/       # Corporate shuttles, medevac & cargo showcase
    │   └── Navbar.jsx      # Sticky navigation with mobile slide drawer
    └── data/               # Destinations, fleet specs, flight matrix, GeoJSON
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ LTS recommended)
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AitHFifi/NRT.git
   cd NRT
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   pnpm dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

### Verification & Quality Checks

```bash
# Run ESLint validation
pnpm lint

# Production build verification
pnpm build
```

---

## 📄 License & Attribution

Designed and developed for **NRT Gabon (Nationale Régionale de Transport)**.  
All rights reserved.
