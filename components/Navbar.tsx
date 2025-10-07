
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { BuildingOfficeIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const NavLinks: React.FC = () => {
  const { t } = useTranslation();
  const linkClass = "px-5 py-3 rounded-lg text-base font-medium transition-colors duration-300";
  const activeLinkClass = "bg-blue-600 text-white";
  const inactiveLinkClass = "text-gray-700 hover:bg-gray-100";

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
    <nav className="bg-white/80 backdrop-blur-lg shadow-xl border-b border-white/30 fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="text-slate-800 font-bold text-xl flex items-center hover:text-blue-600 transition-colors duration-300 py-2">
              <div className="mr-4">
                <BuildingOfficeIcon className="w-10 h-10 text-blue-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-800">
                  Minia Balkantürk
                </span>
                <span className="text-sm text-gray-600 font-medium">Parkı</span>
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
