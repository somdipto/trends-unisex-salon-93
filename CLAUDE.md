# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based website for "Trends Unisex Salon" built with modern web technologies. The site showcases salon services, offers, locations, and provides booking functionality through WhatsApp integration.

**Live URL**: https://trends-unisex-salon.vercel.app/

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling and development server
- **Tailwind CSS** for styling with custom animations
- **shadcn/ui** component library with Radix UI primitives
- **Framer Motion** for animations
- **React Router** for client-side routing
- **React Hook Form** with Zod validation
- **Lucide React** for icons
- **Vercel** for deployment

## Development Commands

```bash
# Install dependencies
npm i

# Start development server (runs on port 8080)
npm run dev

# Build for production
npm run build

# Build for development
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Application Architecture

### Routing Structure
- **/** - Homepage with hero, services overview, offers, testimonials
- **/services** - Detailed services menu with pricing packages
- **/menu** - Service packages and pricing
- **/location** - Location information and maps
- **/contact** - Contact form and information

### Key Components Architecture

**Layout Components:**
- `Navbar` - Main navigation with responsive mobile menu
- `Footer` - Site footer with contact info and social links
- `Hero` - Homepage hero section with call-to-action

**Feature Components:**
- `ExclusiveOffers` - Multi-image carousel for special offers
- `OffersCarousel` - Single-offer display with animations
- `ServicesMenu` - Interactive service selection and pricing
- `LocationMap` - Embedded Google Maps integration
- `ContactForm` - Form with validation and WhatsApp integration
- `WhatsAppButton` - Floating WhatsApp contact button

**Data Management:**
- `src/data/servicesData.ts` - Service packages and pricing data
- `src/components/offers/offersData.ts` - Offers and promotions data
- `src/types/services.ts` - TypeScript interfaces for services

### Styling Approach

- **Tailwind CSS** with custom color scheme (rose/pink primary colors)
- **Custom animations** defined in `tailwind.config.ts` (fade-up, fade-down)
- **Responsive design** with mobile-first approach
- **Framer Motion** for complex animations and page transitions
- **Custom fonts**: Libre Baskerville for headers

### Image Management

- Static images stored in `public/` directory
- Offer images in `public/offers/` with descriptive naming
- Upload functionality for dynamic images in `public/lovable-uploads/`

### State Management

- **React Hook Form** for form state management
- **Local component state** with useState for UI interactions
- **React Query** available but not actively used
- **Context API** not currently implemented

### Booking Integration

All booking flows redirect to WhatsApp with pre-filled messages:
- Base WhatsApp URL: `https://wa.me/919987654321`
- Messages are URL-encoded with context about the selected service

## Development Notes

- **Path Aliases**: `@/` maps to `src/` directory
- **Component Tagger**: Development mode includes component tagging for debugging
- **TypeScript**: Configured with relaxed settings for rapid development
- **Vercel Deployment**: Automatic deployment from git pushes
- **Port Configuration**: Development server runs on port 8080 with HMR on port 443

## Code Patterns

- **Functional Components** with TypeScript
- **Custom Hooks** in `src/hooks/`
- **Utility Functions** in `src/lib/utils.ts` and `src/utils/`
- **Consistent Styling** using Tailwind classes and shadcn/ui components
- **Animation Patterns** using Framer Motion variants for consistent transitions