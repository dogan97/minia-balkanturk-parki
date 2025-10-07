
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { BuildingOfficeIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const NavLinks: React.FC = () => {
  const { t } = useTranslation();
  const linkClass = "px-5 py-3 rounded-lg text-base font-medium transition-colors duration-300";
  const activeLinkClass = "bg-blue-600 text-white";
  const inactiveLinkClass = "text-slate-800 hover:bg-white/20 drop-shadow-sm";

  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}
      >
        {t('nav_home')}
      </NavLink>
      <NavLink
        to="/hakkimizda"
        className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}
      >
        {t('nav_about')}
      </NavLink>
      <NavLink
        to="/eserler"
        className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}
      >
        {t('nav_artworks')}
      </NavLink>
    </>
  )
}

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/20 shadow-2xl border-b border-white/10 fixed w-full z-50 top-0" style={{backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="text-slate-900 font-bold text-xl flex items-center hover:text-blue-600 transition-colors duration-300 py-2 drop-shadow-sm">
              <div className="mr-4">
                <BuildingOfficeIcon className="w-10 h-10 text-blue-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 drop-shadow-sm">
                  Minia Balkantürk
                </span>
                <span className="text-sm text-gray-700 font-medium drop-shadow-sm">Parkı</span>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <LanguageSwitcher />
          </div>
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="inline-flex items-center justify-center p-3 rounded-lg bg-slate-800 text-white hover:bg-slate-700 focus:outline-none transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-6 space-y-4 bg-white border-t border-gray-200 shadow-lg">
            <div className="flex flex-col space-y-2">
              <NavLinks />
            </div>
            <div className="pt-4 border-t border-gray-200 flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
