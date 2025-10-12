
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { BuildingOfficeIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const NavLinks: React.FC<{ onLinkClick?: () => void }> = ({ onLinkClick }) => {
  const { t } = useTranslation();
  const baseLinkClass = "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300";
  const getClass = (isActive: boolean) =>
    `${baseLinkClass} ${isActive ? 'bg-blue-600 text-white' : 'text-slate-800 hover:text-blue-600 hover:bg-white/60'}`;

  return (
    <>
      <NavLink to="/" className={({ isActive }) => getClass(isActive)} onClick={onLinkClick}>
        {t('nav_home')}
      </NavLink>
      <NavLink to="/hakkimizda" className={({ isActive }) => getClass(isActive)} onClick={onLinkClick}>
        {t('nav_about')}
      </NavLink>
      <NavLink to="/eserler" className={({ isActive }) => getClass(isActive)} onClick={onLinkClick}>
        {t('nav_artworks')}
      </NavLink>
    </>
  )
}

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-[60]">
      <div className="bg-white/60 border-b border-white/30 backdrop-blur-2xl shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="text-slate-900 font-bold text-xl flex items-center hover:text-blue-600 transition-colors duration-300 py-2">
                <div className="mr-3">
                  <BuildingOfficeIcon className="w-9 h-9 text-blue-600" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-lg font-extrabold tracking-tight">Minia Balkantürk</span>
                  <span className="text-xs text-gray-700 font-medium">Parkı</span>
                </div>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <NavLinks />
              <div className="h-6 w-px bg-gray-300" />
              <LanguageSwitcher />
              <NavLink
                to="/eserler"
                className={() =>
                  "ml-2 inline-flex items-center rounded-full bg-blue-600 text-white text-sm font-semibold px-4 py-2 hover:bg-blue-700 transition-colors duration-300"
                }
              >
                {t('nav_artworks')}
              </NavLink>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2.5 rounded-lg bg-slate-900/90 text-white hover:bg-slate-900 focus:outline-none transition-colors duration-300"
                aria-label="Toggle menu"
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
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 top-20 bg-white/95 backdrop-blur-xl border-t border-gray-200 z-[70]">
            <div className="px-4 pt-6 pb-8 space-y-4">
              <div className="flex flex-col space-y-2 items-center text-center">
                <NavLink to="/" className={({ isActive }) => `${isActive ? 'bg-blue-600 text-white' : 'text-slate-800 hover:bg-gray-100'} w-full max-w-xs px-4 py-3 rounded-xl text-base font-medium`} onClick={() => setIsMobileMenuOpen(false)}>
                  {t('nav_home')}
                </NavLink>
                <NavLink to="/hakkimizda" className={({ isActive }) => `${isActive ? 'bg-blue-600 text-white' : 'text-slate-800 hover:bg-gray-100'} w-full max-w-xs px-4 py-3 rounded-xl text-base font-medium`} onClick={() => setIsMobileMenuOpen(false)}>
                  {t('nav_about')}
                </NavLink>
                <NavLink to="/eserler" className={({ isActive }) => `${isActive ? 'bg-blue-600 text-white' : 'text-slate-800 hover:bg-gray-100'} w-full max-w-xs px-4 py-3 rounded-xl text-base font-medium`} onClick={() => setIsMobileMenuOpen(false)}>
                  {t('nav_artworks')}
                </NavLink>
              </div>
              <div className="pt-4 border-t border-gray-200 flex justify-center">
                <div className="relative z-[80]"><LanguageSwitcher /></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
