# Appala Lohith - Personal Developer Portfolio

A modern, production-grade, highly aesthetic developer portfolio web application built with React, Vite, Tailwind CSS, Framer Motion, and EmailJS.

## 🚀 Features

- **Responsive & Dynamic Design System**: Sleek glassmorphism effects, custom color tokens, dark/light theme toggle, custom animated cursor, and dynamic particle background.
- **Section Highlights**:
  - **Hero**: Typing animation for multi-role titles, quick CTAs, and floating badges.
  - **About**: Live interactive statistics counter and core competencies list.
  - **Skills Grid**: Interactive category filters with progress indicators.
  - **Experience & Education**: Timeline view of roles, achievements, and degrees.
  - **Projects Showcase**: Interactive filtering by category, search bar, project detail pages, and live/GitHub links.
  - **Certifications**: Verified credential badges with direct verification links.
  - **Contact**: Functional email contact form powered by EmailJS and react-hot-toast notifications.
  - **Interactive Resume**: Dedicated page for resume viewing and PDF downloading.

## 🛠️ Project Structure

```text
portfolio/
├── public/
│   ├── favicon/ (favicon.ico)
│   ├── images/ (profile.png, hero-bg.jpg)
│   ├── resume/ (Appala_Lohith_Resume.pdf)
│   ├── logos/
│   └── robots.txt
└── src/
    ├── assets/
    ├── components/
    │   ├── common/ (Button, Card, Badge, Loader, SectionTitle, SocialLinks)
    │   ├── layout/ (Navbar, Footer, Sidebar)
    │   ├── hero/
    │   ├── about/
    │   ├── skills/
    │   ├── experience/
    │   ├── education/
    │   ├── certifications/
    │   ├── projects/ (ProjectCard, ProjectFilter)
    │   ├── contact/
    │   └── ui/ (Cursor, ScrollProgress, ThemeToggle, ParticleBackground)
    ├── pages/ (Home, Projects, ProjectDetails, Resume, NotFound)
    ├── data/ (skills.js, experience.js, projects.js, education.js, certifications.js, socials.js)
    ├── context/ (ThemeContext.jsx)
    ├── hooks/ (useScroll.js, useTheme.js)
    ├── services/ (emailService.js)
    ├── utils/ (constants.js, helpers.js)
    ├── styles/ (globals.css, animations.css)
    ├── App.jsx
    ├── main.jsx
    └── routes.jsx
```

## 🛠️ Installation & Setup

1. **Install dependencies**:
   ```bash
   cd portfolio
   npm install --legacy-peer-deps
   ```

2. **Environment Configuration**:
   Update `.env` with your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

3. **Development Server**:
   ```bash
   npm run dev
   ```

4. **Production Build**:
   ```bash
   npm run build
   ```
