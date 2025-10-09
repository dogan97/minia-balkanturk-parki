
import React from 'react';
import { useTranslation } from 'react-i18next';

const SocialIcon: React.FC<{ href: string; label: string; children: React.ReactNode }> = ({ href, label, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-slate-500 hover:text-slate-700 transition-colors">
    {children}
  </a>
);

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="text-slate-800 bg-gradient-to-b from-white via-sky-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-24 -right-10 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Top CTA / Newsletter */}
        <div className="bg-white border border-sky-100 rounded-2xl p-6 md:p-8 shadow-sm text-center md:text-left mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-slate-900">Güncellemeleri Kaçırmayın</h3>
              <p className="text-slate-600 mt-1">Yeni eserler ve etkinlikler için bültenimize katılın.</p>
            </div>
            <form className="flex items-center gap-3 justify-center md:justify-end">
              <input type="email" placeholder="E-posta adresiniz" className="w-56 md:w-72 px-4 py-3 rounded-xl bg-white text-slate-900 placeholder-slate-500 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400" />
              <button type="submit" className="px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-colors font-semibold text-white">Abone Ol</button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          {/* Brand */}
          <div>
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l9-4 9 4-9 4-9-4z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10l9 4 9-4V7"/></svg>
              </div>
              <div className="leading-tight">
                <p className="font-bold text-lg">Minia Balkantürk</p>
                <p className="text-xs text-slate-500">Parkı</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 max-w-xs mx-auto md:mx-0">Balkan kültür mirasını minyatür eserlerle keşfedin.</p>
            <div className="flex items-center space-x-4 mt-4 justify-center md:justify-start text-slate-500">
              <SocialIcon href="#" label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </SocialIcon>
              <SocialIcon href="#" label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
              </SocialIcon>
              <SocialIcon href="#" label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.153-1.772 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 4.22c.636-.247 1.363-.416 2.427-.465C9.792 2.013 10.146 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/></svg>
              </SocialIcon>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Site</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Anasayfa</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Eserler</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Destek</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900 transition-colors">SSS</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Ziyaret Kuralları</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Gizlilik</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">İletişim</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Nilüfer, Bursa, Türkiye</li>
              <li>contact@miniabalkanturk.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between text-sm text-slate-600 text-center">
          <p className="mb-4 md:mb-0 w-full">{t('footer_copyright')}</p>
          <div className="space-x-4 w-full flex justify-center md:justify-end">
            <a href="#" className="hover:text-slate-900 transition-colors">Kullanım Şartları</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Çerezler</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
