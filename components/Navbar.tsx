
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

const NavLinks: React.FC = () => {
  const { t } = useTranslation();
  const linkClass = "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 relative";
  const activeLinkClass = "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25";
  const inactiveLinkClass = "text-slate-700 hover:bg-gradient-to-r hover:from-emerald-400 hover:to-cyan-500 hover:text-white hover:shadow-md hover:shadow-emerald-400/20";

  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}
      >
        🏠 {t('nav_home')}
      </NavLink>
      <NavLink
        to="/hakkimizda"
        className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}
      >
        ℹ️ {t('nav_about')}
      </NavLink>
      <NavLink
        to="/eserler"
        className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}
      >
        🏛️ {t('nav_artworks')}
      </NavLink>
    </>
  )
}

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-slate-50 via-white to-emerald-50 shadow-lg border-b border-emerald-100 fixed w-full z-50 top-0 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-18 py-3">
          <div className="flex items-center">
            <Link to="/" className="text-slate-800 font-bold text-xl flex items-center hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2.5 rounded-xl mr-3 shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-all duration-300">
                <span role="img" aria-label="park" className="text-xl">🏰</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
                  Minia Balkantürk
                </span>
                <span className="text-xs text-slate-600 font-medium">Parkı</span>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <NavLinks />
            <LanguageSwitcher />
          </div>
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 focus:outline-none shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-6 pt-4 pb-6 space-y-4 bg-gradient-to-b from-emerald-50/80 to-teal-50/80 backdrop-blur-md border-t border-emerald-200/50 shadow-xl">
            <div className="flex flex-col space-y-3 items-center">
              <NavLinks />
            </div>
            <div className="pt-4 border-t border-emerald-200/50 flex justify-center">
              <div className="p-3 bg-white/70 rounded-lg backdrop-blur-sm shadow-md">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
