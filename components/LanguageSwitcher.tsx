
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlobeAltIcon, CheckIcon } from '@heroicons/react/24/outline';

const languages = [
  { code: 'tr', name: 'TR', flagCode: 'tr', alt: 'Türkiye' },
  { code: 'en', name: 'EN', flagCode: 'gb', alt: 'United Kingdom' },
  { code: 'bg', name: 'BG', flagCode: 'bg', alt: 'Bulgaria' },
  { code: 'sr', name: 'SR', flagCode: 'rs', alt: 'Serbia' },
];

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const currentCode = i18n.language;

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  const active = languages.find(l => l.code === currentCode) || languages[0];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/70 backdrop-blur border border-gray-200 text-slate-800 hover:bg-white transition-colors"
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <img 
          src={`https://flagcdn.com/w40/${active.flagCode}.png`} 
          srcSet={`https://flagcdn.com/w40/${active.flagCode}.png 1x, https://flagcdn.com/w80/${active.flagCode}.png 2x`} 
          alt={active.alt} 
          className="h-4 w-6 rounded-sm object-cover" 
        />
        <span className="hidden md:inline text-sm font-medium">{active.name}</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-200 z-[90]">
          <ul role="menu" className="py-1">
            {languages.map(lang => {
              const isActive = lang.code === currentCode;
              return (
                <li key={lang.code}>
                  <button
                    role="menuitemradio"
                    aria-checked={isActive}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full flex items-center px-3 py-2 text-sm hover:bg-gray-50 ${isActive ? 'text-slate-900 font-semibold' : 'text-slate-700'}`}
                  >
                    <img 
                      src={`https://flagcdn.com/w40/${lang.flagCode}.png`} 
                      srcSet={`https://flagcdn.com/w40/${lang.flagCode}.png 1x, https://flagcdn.com/w80/${lang.flagCode}.png 2x`} 
                      alt={lang.alt} 
                      className="h-4 w-6 rounded-sm mr-2 object-cover" 
                    />
                    <span>{lang.name}</span>
                    {isActive && <CheckIcon className="w-4 h-4 ml-auto text-slate-700" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
