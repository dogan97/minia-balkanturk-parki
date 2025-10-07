
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { HiHome, HiInformationCircle, HiCollection, HiMenu, HiX, HiOfficeBuilding } from 'react-icons/hi';

const NavLinks: React.FC = () => {
  const { t } = useTranslation();
  const linkClass = "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300";
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
    <nav className="bg-white shadow-sm border-b border-gray-200 fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-slate-800 font-bold text-xl flex items-center hover:text-blue-600 transition-colors duration-300">
              <div className="bg-slate-800 p-2 rounded-lg mr-3">
                <HiOfficeBuilding className="text-white text-lg w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-slate-800">
                  Minia Balkantürk
                </span>
                <span className="text-xs text-gray-600 font-medium">Parkı</span>
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
              className="inline-flex items-center justify-center p-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 focus:outline-none transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
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
