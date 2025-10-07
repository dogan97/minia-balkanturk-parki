
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
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white rounded-lg p-3 mb-8">
            <span className="text-3xl">🏛️</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('artworks_title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('artworks_subtitle')}
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Search Section */}
          <div className="mb-12">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-gray-400">🔍</span>
                </div>
                <input
                  type="text"
                  placeholder="Eser veya şehir ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-lg text-slate-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-gray-100 rounded-lg px-6 py-2">
              <span className="text-gray-600 font-medium">
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
                <div className="w-24 h-24 bg-slate-800 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl text-white">🔍</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Eser bulunamadı</h3>
                <p className="text-gray-600 mb-6">Arama kriterlerinizi değiştirmeyi deneyin</p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
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
