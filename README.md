# ArvinSoftware — Phase 1 Frontend Website

> **Tagline:** Turning Ideas Into Digital Reality.  
> **Status:** Phase 1 Complete (Production-Ready Frontend)  
> **Framework:** Next.js 16 (App Router) • React 19 • TypeScript • Tailwind CSS v4 • Lucide Icons  
> **Currency Standard:** Indian Rupees (₹ INR, `en-IN` locale)

---

## 1. Project Overview

ArvinSoftware is a software development company specializing in modern web platforms, mobile solutions, custom architectures, and digital design systems.

This repository contains the **Phase 1 Frontend Application**, engineered with a modern dark-mode-first glassmorphism visual aesthetic, responsive touch interactions, full client-side form validation, and accessible typography.

> **Important Scope Disclosure:** Phase 1 covers the frontend architecture exclusively. Backend APIs, databases (PostgreSQL/Prisma), authentication, and CMS integrations are scheduled for Phase 2.

---

## 2. Implemented Pages (All 11 Routes)

1. **Home (`/`):** Hero with headline *"Turning Ideas Into Digital Reality"*, interactive tech architecture visualizer, services preview, featured projects, tech stack preview, and dual CTAs.
2. **About Us (`/about`):** Engineering philosophy, Vision, Mission, 4 core values, and 4-step agile delivery lifecycle.
3. **Services (`/services`):** 10 proposed service categories with capabilities lists, category filter tabs, and draft disclaimer notice.
4. **Projects / Portfolio (`/projects`):** Exclusively features the two ongoing initiatives: **WOWBUS** (*Ongoing*) and **Madams Chocklets** (*Ongoing*) with neutral branded visual placeholders.
5. **Technologies (`/technologies`):** Interactive tech radar across Frontend, Backend, Mobile, Databases, Cloud & DevOps, and Tools.
6. **Contact Us (`/contact`):** Exact contact channels (Email: `venugopalreddyc.in@gmail.com`, Venugopal Reddy: `9014194696`, Venkatesh Shetty: `63632 67322`), telephone links, inactive WhatsApp notices, and a 9-field client-side validated inquiry form with INR budget brackets.
7. **Blog / News (`/blog`):** Search interface, category filters, and required empty state: *"Insights and updates are coming soon."*
8. **Careers (`/careers`):** Engineering culture highlights, simulated talent submission form, and required empty state: *"No current openings. Please check back later."*
9. **Testimonials (`/testimonials`):** Quality commitments and required empty state: *"Customer stories will be featured here soon."*
10. **Privacy Policy (`/privacy-policy`):** Structured privacy policy draft with clear notice requiring formal legal review.
11. **Terms & Conditions (`/terms`):** Structured terms of service draft with clear notice requiring formal legal review.

---

## 3. Technology Stack

- **Framework:** Next.js 16.4 (App Router with Turbopack)
- **UI Library:** React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4 with custom glassmorphism utilities & CSS variables
- **Icons:** Lucide React
- **Theme Engine:** Zero-flicker React 19 `useSyncExternalStore` theme provider with `localStorage` persistence and system preference detection
- **Testing:** Headless browser automation (Puppeteer) with 100/100 verified regression tests

---

## 4. Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000

# 4. Run production build & start
npm run build
npm start

# 5. Run ESLint code quality checks
npm run lint
```

---

## 5. Vercel Deployment Guide

### Option A: Deploy via GitHub (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git remote add origin https://github.com/<your-username>/arvinsoftware.git
   git branch -M main
   git push -u origin main
   ```
2. Log in to [Vercel Dashboard](https://vercel.com).
3. Click **"Add New..."** $\rightarrow$ **"Project"**.
4. Import your `arvinsoftware` GitHub repository.
5. Vercel automatically detects Next.js:
   - **Framework Preset:** `Next.js`
   - **Root Directory:** `./`
   - **Build Command:** `next build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`
6. Click **"Deploy"**. Vercel will build and assign a production URL (e.g. `arvinsoftware.vercel.app`).

### Option B: Deploy via Vercel CLI
```bash
# 1. Log in to Vercel
npx vercel login

# 2. Link & Deploy to Production
npx vercel --prod
```

---

## 6. Custom Domain Setup (Existing Domain)

Once the production deployment is active on Vercel:
1. In your **Vercel Project Dashboard**, navigate to **Settings** $\rightarrow$ **Domains**.
2. Enter your domain (e.g., `yourdomain.com`).
3. Add both the root domain (`yourdomain.com`) and the `www` subdomain (`www.yourdomain.com`).
4. In your domain registrar / DNS provider (e.g., GoDaddy, Namecheap, Cloudflare), configure:
   - **A Record:** `@` pointing to `76.76.21.21`
   - **CNAME Record:** `www` pointing to `cname.vercel-dns.com`
5. Vercel will automatically provision a free SSL/TLS certificate (HTTPS) within a few minutes.

---

## 7. Phase 1 Security & Compliance Notice

- All contact submissions, talent applications, and interactive buttons operate strictly in frontend demonstration mode.
- No database credentials, server endpoints, or third-party APIs are connected in Phase 1.
- No user data or resume files are transmitted to external servers.
