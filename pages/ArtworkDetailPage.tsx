
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useArtworkBySlug, useArtworks } from '../hooks/useArtworks';
import { 
  ArrowLeftIcon, 
  ArrowRightIcon, 
  MapPinIcon, 
  UserIcon, 
  CalendarDaysIcon, 
  ScaleIcon, 
  BookOpenIcon, 
  BuildingOfficeIcon, 
  MagnifyingGlassIcon, 
  HomeIcon 
} from '@heroicons/react/24/outline';

const InfoCard: React.FC<{ 
  label: string; 
  value: string; 
  icon: React.ReactNode;
}> = ({ label, value, icon }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
    <div className="flex items-center mb-3">
      <div className="mr-3">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">{label}</h3>
    </div>
    <p className="text-lg font-bold text-slate-800">{value}</p>
  </div>
);

export const ArtworkDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const artwork = useArtworkBySlug(slug);
  const allArtworks = useArtworks();
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dragStartXRef = useRef<number | null>(null);
  const dragActiveRef = useRef(false);

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!artwork) {
    return <Navigate to="/404" replace />;
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % artwork.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + artwork.images.length) % artwork.images.length);
  };
  
  const onPointerDown = (clientX: number) => {
    dragStartXRef.current = clientX;
    dragActiveRef.current = true;
  };
  const onPointerMove = (clientX: number) => {
    if (!dragActiveRef.current || dragStartXRef.current === null) return;
    const deltaX = clientX - dragStartXRef.current;
    if (Math.abs(deltaX) > 60) {
      if (deltaX < 0) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % artwork.images.length);
      } else {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + artwork.images.length) % artwork.images.length);
      }
      dragActiveRef.current = false;
      dragStartXRef.current = null;
    }
  };
  const onPointerUp = () => {
    dragActiveRef.current = false;
    dragStartXRef.current = null;
  };
  
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setCurrentImageIndex((prevIndex) => (prevIndex + 1) % artwork.images.length);
      if (e.key === 'ArrowLeft') setCurrentImageIndex((prevIndex) => (prevIndex - 1 + artwork.images.length) % artwork.images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [artwork.images.length]);

  const related = useMemo(() => {
    const city = artwork.location.split(',')[0]?.trim();
    return allArtworks.filter(a => a.slug !== artwork.slug && a.location.startsWith(city || '')).slice(0, 3);
  }, [allArtworks, artwork]);
  
  return (
    <div className="bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <Link 
            to="/eserler" 
            className="inline-flex items-center bg-gray-100 text-slate-800 rounded-full px-4 py-2 hover:bg-gray-200 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" /> Geri Dön
          </Link>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3">{artwork.title}</h1>
          <div className="flex justify-center"><div className="w-24 h-1 bg-blue-600 rounded-full"></div></div>
        </div>
      </div>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Image Slider */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
                <div 
                  className="relative rounded-lg overflow-hidden select-none touch-pan-y"
                  onMouseDown={(e) => onPointerDown(e.clientX)}
                  onMouseMove={(e) => onPointerMove(e.clientX)}
                  onMouseUp={onPointerUp}
                  onMouseLeave={onPointerUp}
                  onTouchStart={(e) => onPointerDown(e.touches[0].clientX)}
                  onTouchMove={(e) => onPointerMove(e.touches[0].clientX)}
                  onTouchEnd={onPointerUp}
                >
                  <img 
                    src={artwork.images[currentImageIndex]} 
                    alt={`${artwork.title} - ${currentImageIndex + 1}`} 
                    className="w-full h-96 md:h-[500px] object-cover"
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                  />
                  
                  {/* Image Counter */}
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    {currentImageIndex + 1} / {artwork.images.length}
                  </div>

                  {/* Navigation Arrows */}
                  {artwork.images.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage} 
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-slate-800 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                      >
                        <ArrowLeftIcon className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={nextImage} 
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-slate-800 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                      >
                        <ArrowRightIcon className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnail Strip */}
                {artwork.images.length > 1 && (
                  <div className="flex justify-center mt-6 space-x-3">
                    {artwork.images.map((img, index) => (
                      <button 
                        key={index} 
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'ring-2 ring-blue-500' 
                            : 'opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img 
                          src={img} 
                          alt={`thumbnail ${index + 1}`} 
                          className="w-20 h-16 object-cover"
                          draggable={false}
                          onDragStart={(e) => e.preventDefault()}
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Info Section */}
            <div className="space-y-6">
              {/* Description Card */}
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <BookOpenIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">
                    Açıklama
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">{artwork.description}</p>
              </div>

              {/* Info Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InfoCard 
                  label={t('artwork_detail_location')} 
                  value={artwork.location}
                  icon={<MapPinIcon className="w-5 h-5 text-blue-600" />}
                />
                <InfoCard 
                  label={t('artwork_detail_architect')} 
                  value={artwork.architect}
                  icon={<UserIcon className="w-5 h-5 text-blue-600" />}
                />
                <InfoCard 
                  label={t('artwork_detail_year')} 
                  value={artwork.year}
                  icon={<CalendarDaysIcon className="w-5 h-5 text-blue-600" />}
                />
                <InfoCard 
                  label={t('artwork_detail_scale')} 
                  value={artwork.scale}
                  icon={<ScaleIcon className="w-5 h-5 text-blue-600" />}
                />
              </div>
            </div>
          </div>

          {/* Cultural Background Section */}
          <div className="mt-16">
            <div className="bg-gray-50 rounded-lg p-8 md:p-12">
              <div className="flex items-center mb-8">
                <div className="mr-4">
                  <BuildingOfficeIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                  {t('artwork_detail_background')}
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg md:text-xl">{artwork.culturalBackground}</p>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Benzer Eserler</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map(r => (
                  <Link key={r.id} to={`/eser/${r.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 shadow hover:shadow-lg transition-all duration-300">
                    <div className="relative">
                      <img src={r.thumbnail} alt={r.title} className="w-full h-44 object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="p-5">
                      <h4 className="text-base font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{r.title}</h4>
                      <p className="text-xs text-gray-600">{r.location}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const NotFoundPage: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center px-4">
                <div className="bg-gray-50 rounded-lg p-12 max-w-md mx-auto">
                    <div className="flex justify-center mb-8">
                        <MagnifyingGlassIcon className="w-16 h-16 text-blue-600" />
                    </div>
                    <h1 className="text-4xl font-bold text-slate-800 mb-4">
                        {t('not_found')}
                    </h1>
                    <p className="text-gray-600 mb-8">Aradığınız sayfa bulunamadı.</p>
                    <Link 
                        to="/" 
                        className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                    >
                        <HomeIcon className="w-5 h-5 mr-2" />
                        Ana Sayfaya Dön
                    </Link>
                </div>
            </div>
        </div>
    );
}
