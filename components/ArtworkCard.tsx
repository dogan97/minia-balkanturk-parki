
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ArtworkCardProps {
  slug: string;
  title: string;
  thumbnail: string;
  location: string;
}

export const ArtworkCard: React.FC<ArtworkCardProps> = ({ slug, title, thumbnail, location }) => {
  const { t } = useTranslation();
  
  return (
    <div className="group relative bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-emerald-100/50 hover:scale-[1.03] hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
        
        {/* Floating Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Location Badge */}
        <div className="flex items-center mb-3">
          <div className="flex items-center bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {location}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-800 mb-4 line-clamp-2 group-hover:text-emerald-700 transition-colors duration-300">
          {title}
        </h3>

        {/* Button */}
        <Link 
          to={`/eser/${slug}`} 
          className="inline-flex items-center justify-center w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group/button"
        >
          <span className="mr-2">{t('artwork_card_button')}</span>
          <svg className="w-5 h-5 transition-transform duration-300 group-hover/button:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-6 left-6 w-8 h-8 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-6 right-6 w-6 h-6 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>
    </div>
  );
};
