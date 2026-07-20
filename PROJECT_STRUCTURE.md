# Developer Portfolio - Complete Project Structure & Setup Guide

This document provides the complete installation instructions, dependencies, and unabridged file hierarchy to replicate this developer portfolio setup.

---

## 1. Installation & Quick Setup

### Step A: Initialize Vite React Project
```bash
npx -y create-vite@latest developer-portfolio --template react
cd developer-portfolio
```

### Step B: Install All Production Dependencies
```bash
npm install @emailjs/browser @tailwindcss/vite @vercel/analytics aos clsx framer-motion react react-countup react-dom react-helmet-async react-hot-toast react-icons react-intersection-observer react-router-dom react-scroll react-type-animation tailwindcss
```

### Step C: Install Dev Dependencies
```bash
npm install -D @types/react @types/react-dom @vitejs/plugin-react oxlint vite
```

---

## 2. Dependencies List (`package.json`)

```json
{
  "name": "portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "oxlint",
    "preview": "vite preview"
  },
  "dependencies": {
    "@emailjs/browser": "^4.4.1",
    "@tailwindcss/vite": "^4.0.0",
    "@vercel/analytics": "^2.0.1",
    "aos": "^2.3.4",
    "clsx": "^2.1.1",
    "framer-motion": "^12.4.2",
    "react": "^18.3.1",
    "react-countup": "^6.5.3",
    "react-dom": "^18.3.1",
    "react-helmet-async": "^2.0.5",
    "react-hot-toast": "^2.5.0",
    "react-icons": "^5.5.0",
    "react-intersection-observer": "^9.15.1",
    "react-router-dom": "^7.1.5",
    "react-scroll": "^1.9.0",
    "react-type-animation": "^3.2.0",
    "tailwindcss": "^4.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "oxlint": "^0.15.0",
    "vite": "^6.1.0"
  }
}
```

---

## 3. Complete Project Directory & File Tree

```
portfolio/
├── .env
├── .gitignore
├── .oxlintrc.json
├── index.html
├── LICENSE
├── README.md
├── package.json
├── package-lock.json
├── vercel.json
├── vite.config.js
├── public/
│   ├── favicon.ico
│   ├── images/
│   │   ├── profile.png
│   │   └── about.jpg
│   └── resume/
│       └── Appala_Lohith_Resume.pdf
└── src/
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── routes.jsx
    ├── assets/
    ├── context/
    │   └── ThemeContext.jsx
    ├── data/
    │   ├── achievements.js
    │   ├── certifications.js
    │   ├── education.js
    │   ├── experience.js
    │   ├── projects.js
    │   ├── skills.js
    │   └── socials.js
    ├── hooks/
    │   ├── useScroll.js
    │   └── useTheme.js
    ├── services/
    │   └── emailService.js
    ├── seo/
    │   ├── HomeSEO.jsx
    │   ├── ProjectSEO.jsx
    │   ├── ResumeSEO.jsx
    │   ├── seoConfig.js
    │   └── index.js
    ├── styles/
    │   ├── animations.css
    │   └── globals.css
    ├── utils/
    │   ├── constants.js
    │   └── helpers.js
    ├── pages/
    │   ├── Home/
    │   │   └── Home.jsx
    │   ├── NotFound/
    │   │   └── NotFound.jsx
    │   ├── ProjectDetails/
    │   │   └── ProjectDetails.jsx
    │   ├── Projects/
    │   │   └── Projects.jsx
    │   └── Resume/
    │       └── Resume.jsx
    └── components/
        ├── about/
        │   ├── About.jsx
        │   ├── AboutContent.jsx
        │   ├── AboutImage.jsx
        │   ├── HighlightCard.jsx
        │   ├── Stats.jsx
        │   ├── aboutData.js
        │   └── index.js
        ├── achievements/
        │   ├── AchievementCard.jsx
        │   ├── Achievements.jsx
        │   ├── achievementData.js
        │   └── index.js
        ├── certifications/
        │   ├── CertificationCard.jsx
        │   ├── Certifications.jsx
        │   ├── certificationData.js
        │   └── index.js
        ├── contact/
        │   ├── Contact.jsx
        │   ├── ContactForm.jsx
        │   └── index.js
        ├── education/
        │   ├── Education.jsx
        │   ├── EducationCard.jsx
        │   ├── EducationTimeline.jsx
        │   ├── educationData.js
        │   └── index.js
        ├── experience/
        │   ├── AchievementCard.jsx
        │   ├── Experience.jsx
        │   ├── ExperienceCard.jsx
        │   ├── TechBadge.jsx
        │   ├── Timeline.jsx
        │   ├── TimelineItem.jsx
        │   ├── experienceData.js
        │   └── index.js
        ├── hero/
        │   ├── FloatingTech.jsx
        │   ├── Hero.jsx
        │   ├── HeroButtons.jsx
        │   ├── HeroContent.jsx
        │   ├── HeroImage.jsx
        │   ├── SocialLinks.jsx
        │   ├── heroData.js
        │   └── index.js
        ├── layout/
        │   ├── Footer/
        │   │   └── Footer.jsx
        │   ├── Layout/
        │   │   └── Layout.jsx
        │   ├── Navbar/
        │   │   ├── DesktopMenu.jsx
        │   │   ├── Logo.jsx
        │   │   ├── MobileMenu.jsx
        │   │   ├── Navbar.css
        │   │   ├── Navbar.jsx
        │   │   ├── ThemeToggle.jsx
        │   │   ├── index.js
        │   │   └── navLinks.js
        │   └── Sidebar/
        │       └── Sidebar.jsx
        ├── projects/
        │   ├── ArchitectureCard.jsx
        │   ├── FeatureList.jsx
        │   ├── FeaturedProject.jsx
        │   ├── GitHubButton.jsx
        │   ├── LiveDemoButton.jsx
        │   ├── ProjectCard.jsx
        │   ├── ProjectFilter.jsx
        │   ├── ProjectGallery.jsx
        │   ├── ProjectModal.jsx
        │   ├── ProjectsSection.jsx
        │   ├── TechStack.jsx
        │   └── index.js
        ├── skills/
        │   ├── CategoryTabs.jsx
        │   ├── LearningCard.jsx
        │   ├── SkillCard.jsx
        │   ├── SkillCategory.jsx
        │   ├── SkillGrid.jsx
        │   ├── Skills.jsx
        │   ├── StrengthCard.jsx
        │   └── index.js
        ├── ui/
        └── common/
            ├── Badge/
            ├── Button/
            ├── Card/
            ├── Container/
            ├── ErrorBoundary/
            ├── IntroSplash/
            │   ├── IntroSplash.jsx
            │   └── index.js
            ├── Loader/
            │   ├── Loader.css
            │   ├── Loader.jsx
            │   └── index.js
            ├── ScrollProgress/
            ├── ScrollToTop/
            │   ├── ScrollToTop.jsx
            │   └── ScrollToTopButton.jsx
            ├── Section/
            ├── SectionTitle/
            ├── SocialLinks/
            │   ├── SocialLinks.css
            │   ├── SocialLinks.jsx
            │   └── index.js
            ├── Subtitle/
            ├── Title/
            └── WhatsAppBot/
                ├── WhatsAppBot.jsx
                └── index.js
```

---

## 4. Key Component Architecture Summary

1. **`IntroSplash.jsx`**: Full-screen intro splash banner showing candidate's full name with auto scroll-up curtain transition on site entry.
2. **`Navbar.jsx` & `DesktopMenu.jsx`**: Clean desktop navbar (`Home`, `About`, `Experience`, `Education`, `Projects`, `Contact`) with responsive mobile 3-dash menu drawer.
3. **`WhatsAppBot.jsx`**: Round floating WhatsApp bot widget on the right side of the screen (`right-6 bottom-6`).
4. **`Contact.jsx` & `ContactForm.jsx`**: Contact details card with full name badge, single direct contact list, and EmailJS message form.
