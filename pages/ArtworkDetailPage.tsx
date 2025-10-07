
import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useArtworkBySlug } from '../hooks/useArtworks';

const InfoCard: React.FC<{ 
  label: string; 
  value: string; 
  icon: string;
}> = ({ label, value, icon }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
    <div className="flex items-center mb-3">
      <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mr-3">
        <span className="text-lg text-white">{icon}</span>
      </div>
      <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">{label}</h3>
    </div>
    <p className="text-lg font-bold text-slate-800">{value}</p>
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
    <div className="bg-white">
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-12">
            <Link 
              to="/eserler" 
              className="inline-flex items-center bg-gray-100 rounded-lg px-4 py-2 hover:bg-gray-200 transition-colors duration-300 mb-8"
            >
              <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium text-gray-700">Geri Dön</span>
            </Link>

            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
                {artwork.title}
              </h1>
              <div className="flex justify-center">
                <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Image Slider */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
                <div className="relative rounded-lg overflow-hidden">
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
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-slate-800 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button 
                        onClick={nextImage} 
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-slate-800 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                            ? 'ring-2 ring-blue-500' 
                            : 'opacity-70 hover:opacity-100'
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
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-lg text-white">📖</span>
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
                  icon="📍"
                />
                <InfoCard 
                  label={t('artwork_detail_architect')} 
                  value={artwork.architect}
                  icon="👷"
                />
                <InfoCard 
                  label={t('artwork_detail_year')} 
                  value={artwork.year}
                  icon="📅"
                />
                <InfoCard 
                  label={t('artwork_detail_scale')} 
                  value={artwork.scale}
                  icon="📏"
                />
              </div>
            </div>
          </div>

          {/* Cultural Background Section */}
          <div className="mt-16">
            <div className="bg-gray-50 rounded-lg p-8 md:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl text-white">🏛️</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                  {t('artwork_detail_background')}
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg md:text-xl">{artwork.culturalBackground}</p>
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
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center px-4">
                <div className="bg-gray-50 rounded-lg p-12 max-w-md mx-auto">
                    <div className="w-24 h-24 bg-slate-800 rounded-lg flex items-center justify-center mx-auto mb-8">
                        <span className="text-4xl text-white">🔍</span>
                    </div>
                    <h1 className="text-4xl font-bold text-slate-800 mb-4">
                        {t('not_found')}
                    </h1>
                    <p className="text-gray-600 mb-8">Aradığınız sayfa bulunamadı.</p>
                    <Link 
                        to="/" 
                        className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
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
