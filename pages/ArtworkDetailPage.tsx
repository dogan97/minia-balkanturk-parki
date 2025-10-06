
import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useArtworkBySlug } from '../hooks/useArtworks';

const InfoCard: React.FC<{ 
  label: string; 
  value: string; 
  icon: string;
  gradient: string;
}> = ({ label, value, icon, gradient }) => (
  <div className={`bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100/50 group hover:scale-[1.02] ${gradient}`}>
    <div className="flex items-center mb-3">
      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
        <span className="text-xl">{icon}</span>
      </div>
      <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider">{label}</h3>
    </div>
    <p className="text-xl font-bold text-slate-800 group-hover:text-emerald-700 transition-colors duration-300">{value}</p>
  </div>
);

export const ArtworkDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const artwork = useArtworkBySlug(slug);
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-12">
            <Link 
              to="/eserler" 
              className="inline-flex items-center bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100/50 mb-8 group"
            >
              <svg className="w-5 h-5 mr-2 text-emerald-600 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium text-slate-700 group-hover:text-emerald-700 transition-colors duration-300">Geri Dön</span>
            </Link>

            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent mb-6 leading-tight md:leading-tight">
                {artwork.title}
              </h1>
              <div className="flex justify-center">
                <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Image Slider */}
            <div className="lg:col-span-2">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-emerald-100/50">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={artwork.images[currentImageIndex]} 
                    alt={`${artwork.title} - ${currentImageIndex + 1}`} 
                    className="w-full h-96 md:h-[500px] object-cover"
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
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 text-emerald-600 p-3 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg group"
                      >
                        <svg className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button 
                        onClick={nextImage} 
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 text-emerald-600 p-3 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg group"
                      >
                        <svg className="w-6 h-6 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
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
                            ? 'ring-4 ring-emerald-500 scale-110' 
                            : 'hover:scale-105 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img 
                          src={img} 
                          alt={`thumbnail ${index + 1}`} 
                          className="w-20 h-16 object-cover"
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
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-emerald-100/50">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-xl">📖</span>
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                    Açıklama
                  </h2>
                </div>
                <p className="text-slate-700 leading-relaxed text-lg">{artwork.description}</p>
              </div>

              {/* Info Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InfoCard 
                  label={t('artwork_detail_location')} 
                  value={artwork.location}
                  icon="📍"
                  gradient="hover:bg-gradient-to-br hover:from-emerald-50/50 hover:to-teal-50/50"
                />
                <InfoCard 
                  label={t('artwork_detail_architect')} 
                  value={artwork.architect}
                  icon="👷"
                  gradient="hover:bg-gradient-to-br hover:from-teal-50/50 hover:to-cyan-50/50"
                />
                <InfoCard 
                  label={t('artwork_detail_year')} 
                  value={artwork.year}
                  icon="📅"
                  gradient="hover:bg-gradient-to-br hover:from-cyan-50/50 hover:to-emerald-50/50"
                />
                <InfoCard 
                  label={t('artwork_detail_scale')} 
                  value={artwork.scale}
                  icon="📏"
                  gradient="hover:bg-gradient-to-br hover:from-emerald-50/50 hover:to-teal-50/50"
                />
              </div>
            </div>
          </div>

          {/* Cultural Background Section */}
          <div className="mt-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-emerald-100/50">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <span className="text-3xl">🏛️</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                  {t('artwork_detail_background')}
                </h2>
              </div>
              <p className="text-slate-700 leading-relaxed text-lg md:text-xl">{artwork.culturalBackground}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NotFoundPage: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30 relative overflow-hidden flex items-center justify-center">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center px-4">
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-emerald-100/50 max-w-md mx-auto">
                    <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                        <span className="text-4xl">🔍</span>
                    </div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent mb-4">
                        {t('not_found')}
                    </h1>
                    <p className="text-slate-600 mb-8">Aradığınız sayfa bulunamadı.</p>
                    <Link 
                        to="/" 
                        className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:scale-105"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Ana Sayfaya Dön
                    </Link>
                </div>
            </div>
        </div>
    );
}
