
import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useArtworks } from '../hooks/useArtworks';
import { BuildingOfficeIcon, MagnifyingGlassIcon, FunnelIcon, MapPinIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

type ArtworkListItem = ReturnType<typeof useArtworks>[number];

const ArtworkItemCard: React.FC<{ item: ArtworkListItem }> = ({ item }) => {
  return (
    <a href={`#/eser/${item.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 shadow hover:shadow-lg transition-all duration-300">
      <div className="relative">
        <img src={item.thumbnail} alt={item.title} className="w-full h-52 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute top-3 left-3 inline-flex items-center bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-[11px] font-semibold text-slate-700">
          <MapPinIcon className="w-3.5 h-3.5 mr-1 text-blue-600" /> {item.location}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">{item.year} · {item.scale}</span>
          <span className="inline-flex items-center text-blue-600 text-sm font-semibold">
            Detay <ArrowRightIcon className="w-4 h-4 ml-1" />
          </span>
        </div>
      </div>
    </a>
  );
};

export const ArtworksPage: React.FC = () => {
  const { t } = useTranslation();
  const translatedArtworks = useArtworks();
  const [searchTerm, setSearchTerm] = useState('');
  const [cityFilter, setCityFilter] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'az' | 'za'>('az');
  const [itemsToShow, setItemsToShow] = useState(8);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredArtworks = translatedArtworks.filter(artwork => {
    const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artwork.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = cityFilter ? artwork.location.toLowerCase().includes(cityFilter.toLowerCase()) : true;
    return matchesSearch && matchesCity;
  });

  const displayedArtworks = [...filteredArtworks].sort((a, b) => {
    const cmp = a.title.localeCompare(b.title, undefined, { sensitivity: 'base' });
    return sortOrder === 'az' ? cmp : -cmp;
  });

  useEffect(() => {
    setItemsToShow(8);
  }, [searchTerm, cityFilter, sortOrder]);

  const uniqueCities = useMemo(() => {
    const set = new Set<string>();
    translatedArtworks.forEach(a => {
      const city = a.location.split(',')[0]?.trim();
      if (city) set.add(city);
    });
    return Array.from(set).slice(0, 10);
  }, [translatedArtworks]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <BuildingOfficeIcon className="w-12 h-12 text-white mx-auto" />
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

      <div className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Search Section */}
          <div className="mb-12">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative md:col-span-2">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Eser veya şehir ara..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-lg text-slate-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 shadow-sm"
                  />
                </div>
                <div className="md:col-span-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FunnelIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Şehir filtrele (örn. Sarajevo)"
                      value={cityFilter}
                      onChange={(e) => setCityFilter(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-lg text-slate-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 shadow-sm"
                    />
                  </div>
                </div>
                <div className="md:col-span-1">
                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value as 'az' | 'za')}
                    className="w-full px-4 py-4 bg-white border border-gray-300 rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 shadow-sm"
                  >
                    <option value="az">A → Z (Başlık)</option>
                    <option value="za">Z → A (Başlık)</option>
                  </select>
                </div>
              </div>
              {uniqueCities.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                  {uniqueCities.map(city => (
                    <button
                      key={city}
                      onClick={() => setCityFilter(prev => prev === city ? '' : city)}
                      className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${cityFilter === city ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-gray-300 hover:bg-gray-50'}`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Results Count + Clear */}
          {(searchTerm || cityFilter) && (
            <div className="flex flex-col items-center mb-8">
              <div className="inline-flex items-center bg-gray-100 rounded-full px-5 py-2">
                <span className="text-gray-600 font-medium">
                  {filteredArtworks.length} eser bulundu
                </span>
              </div>
              <button
                onClick={() => { setSearchTerm(''); setCityFilter(''); }}
                className="mt-4 text-sm text-blue-700 hover:text-blue-800"
              >
                Filtreleri Temizle
              </button>
            </div>
          )}

          {/* Artworks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedArtworks.slice(0, itemsToShow).map((item) => (
              <ArtworkItemCard key={item.id} item={item} />
            ))}
          </div>

          {itemsToShow < displayedArtworks.length && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setItemsToShow(prev => prev + 8)}
                className="inline-flex items-center bg-slate-900 text-white font-semibold px-6 py-3 rounded-full hover:bg-slate-800 transition-colors"
              >
                Daha Fazla Göster
              </button>
            </div>
          )}

          {/* Empty State */}
          {filteredArtworks.length === 0 && (
            <div className="text-center py-16">
              <div className="mb-8">
                <div className="w-24 h-24 bg-slate-800 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl text-white">🔍</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Eser bulunamadı</h3>
                <p className="text-gray-600 mb-6">Arama veya filtre kriterlerinizi değiştirmeyi deneyin</p>
                <button
                  onClick={() => { setSearchTerm(''); setCityFilter(''); }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                >
                  Filtreleri Temizle
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
