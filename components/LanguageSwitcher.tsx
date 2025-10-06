
import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'bg', name: 'Български', flag: '🇧🇬' },
  { code: 'sr', name: 'Srpski', flag: '🇷🇸' },
];

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 hover:from-emerald-500/30 hover:to-teal-600/30 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-emerald-200/30 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 group"
      >
        <span className="text-lg group-hover:scale-110 transition-transform duration-200">{currentLanguage.flag}</span>
        <span className="hidden md:inline text-slate-700 font-medium group-hover:text-emerald-700 transition-colors duration-200">{currentLanguage.name}</span>
        <svg 
          className={`w-4 h-4 text-slate-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-3 w-44 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl shadow-emerald-500/20 border border-emerald-100/50 z-60 overflow-hidden animate-in slide-in-from-top-2 fade-in duration-200">
          <ul className="py-2">
            {languages.map(lang => (
              <li key={lang.code}>
                <button
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full text-left flex items-center px-5 py-3 text-sm transition-all duration-200 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 hover:scale-[1.02] hover:shadow-sm group ${
                    currentLanguage.code === lang.code 
                      ? 'bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 font-semibold border-l-3 border-emerald-500' 
                      : 'text-slate-700 hover:text-emerald-700'
                  }`}
                >
                  <span className="mr-3 text-base group-hover:scale-110 transition-transform duration-200">{lang.flag}</span>
                  <span className="font-medium">{lang.name}</span>
                  {currentLanguage.code === lang.code && (
                    <span className="ml-auto text-emerald-600">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
