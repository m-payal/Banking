
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import CaseStudyView from './views/CaseStudyView';
import UserFlowsView from './views/UserFlowsView';
import AnalyticsView from './views/AnalyticsView';
import TechnicalView from './views/TechnicalView';
import ResultsView from './views/ResultsView';
import ErrorStatesView from './views/ErrorStatesView';
import LiveDemoView from './views/LiveDemoView';
import { Analytics } from "@vercel/analytics/next"

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    // Check initial theme
    const isDarkInitial = document.documentElement.classList.contains('dark');
    setIsDark(isDarkInitial);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  };

  const navLinks = [
    { label: 'Overview', path: '/' },
    { label: 'User Flows', path: '/flows' },
    { label: 'Analytics', path: '/analytics' },
    { label: 'Technical', path: '/technical' },
    { label: 'Results', path: '/results' },
  ];

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 border-b ${
      isScrolled ? 'glass-effect py-2' : 'bg-transparent py-4'
    } border-slate-200 dark:border-slate-800`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
            <span className="material-icons-round text-sm">auto_awesome</span>
          </div>
          <span className="font-display font-extrabold text-xl tracking-tight hidden sm:inline-block">
            FinAI <span className="text-primary">Bot</span>
          </span>
        </div>
        
        <div className="flex items-center space-x-1 sm:space-x-6 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `hover:text-primary transition-colors px-1 py-1 ${isActive ? 'text-primary border-b-2 border-primary' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            <span className="material-icons-round text-slate-600 dark:text-slate-400">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="py-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-2xl font-display font-extrabold mb-4">Let's connect</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
        Interested in building the future of Fintech? I'm currently looking for new opportunities to apply AI & UX.
      </p>
      <div className="flex justify-center space-x-4">
        {[
          { icon: 'mail', label: 'Email' },
          { icon: 'code', label: 'GitHub' },
          { icon: 'link', label: 'LinkedIn' }
        ].map((social) => (
          <a
            key={social.label}
            href="#"
            className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all group"
          >
            <span className="material-icons-round text-lg group-hover:scale-110 transition-transform">{social.icon}</span>
          </a>
        ))}
      </div>
      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
        © Software Development Internship UX Case Study. All Rights Reserved.
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<CaseStudyView />} />
            <Route path="/flows" element={<UserFlowsView />} />
            <Route path="/analytics" element={<AnalyticsView />} />
            <Route path="/technical" element={<TechnicalView />} />
            <Route path="/results" element={<ResultsView />} />
            <Route path="/errors" element={<ErrorStatesView />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
