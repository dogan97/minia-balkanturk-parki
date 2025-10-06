
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArtworkCard } from '../components/ArtworkCard';
import { useArtworks } from '../hooks/useArtworks';

export const ArtworksPage: React.FC = () => {
  const { t } = useTranslation();
  const translatedArtworks = useArtworks();
  const [searchTerm, setSearchTerm] = useState('');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredArtworks = translatedArtworks.filter(artwork => {
    return artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           artwork.location.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-20 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 py-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full p-2 mb-8 shadow-lg">
              <div className="bg-white rounded-full p-3">
                <span className="text-2xl">🏛️</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent mb-6">
              {t('artworks_title')}
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              {t('artworks_subtitle')}
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></div>
            </div>
          </div>

          {/* Search Section */}
          <div className="mb-12">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Eser veya şehir ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-emerald-200/50 rounded-2xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300 shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white/70 backdrop-blur-sm rounded-full px-6 py-2 shadow-md">
              <span className="text-slate-600 font-medium">
                {filteredArtworks.length} eser bulundu
              </span>
            </div>
          </div>

          {/* Artworks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredArtworks.map((artwork) => (
              <ArtworkCard
                key={artwork.id}
                slug={artwork.slug}
                title={artwork.title}
                thumbnail={artwork.thumbnail}
                location={artwork.location}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredArtworks.length === 0 && (
            <div className="text-center py-16">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-4xl">🔍</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-700 mb-4">Eser bulunamadı</h3>
                <p className="text-slate-600 mb-6">Arama kriterlerinizi değiştirmeyi deneyin</p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg font-medium"
                >
                  Aramayı Temizle
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
