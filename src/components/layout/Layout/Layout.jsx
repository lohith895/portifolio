import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ThemeProvider } from "../../../context/ThemeContext";
import ScrollToTop from "../../common/ScrollToTop/ScrollToTop";
import ScrollToTopButton from "../../common/ScrollToTop/ScrollToTopButton";
import ScrollProgress from "../../common/ScrollProgress/ScrollProgress";
import { WhatsAppBot } from "../../common/WhatsAppBot";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

export const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-blue-500 selection:text-white transition-colors duration-250">
        {/* Top Scroll Progress Indicator Bar */}
        <ScrollProgress />

        {/* Skip to Main Content Link for Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-blue-600 focus:text-white focus:font-bold focus:rounded-xl focus:shadow-2xl focus:outline-none"
        >
          Skip to Main Content
        </a>

        {/* Header Navigation */}
        <Navbar />

        {/* Main Content Landmark */}
        <main id="main-content" tabIndex="-1" className="flex-1 focus:outline-none">
          {children}
        </main>

        {/* Footer Landmark */}
        <Footer />

        {/* Floating WhatsApp Quick Bot Widget */}
        <WhatsAppBot />

        {/* Floating Back To Top Button */}
        <ScrollToTopButton />

        {/* Route Scroll Reset & Notifications */}
        <ScrollToTop />
        <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />
        <Analytics />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
