
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const InfoCard: React.FC<{ 
  title: string; 
  text: string; 
  imageUrl: string; 
  reverse?: boolean;
  icon?: string;
  gradient?: string;
}> = ({ title, text, imageUrl, reverse = false, icon, gradient }) => (
  <div className={`group relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-emerald-100/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] ${gradient}`}>
    <div className={`flex flex-col lg:flex-row items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className="lg:w-1/2 p-8 lg:p-12">
        <div className="flex items-center mb-6">
          {icon && (
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">{icon}</span>
            </div>
          )}
          <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
            {title}
          </h3>
        </div>
        <p className="text-slate-700 leading-relaxed text-lg font-medium">
          {text}
        </p>
        <div className="mt-8">
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full group-hover:w-32 transition-all duration-500"></div>
        </div>
      </div>
      <div className="lg:w-1/2 relative">
        <div className="relative overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  </div>
);

const StatsCard: React.FC<{ number: string; label: string; icon: string }> = ({ number, label, icon }) => (
  <div className="text-center group">
    <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
      <span className="text-3xl">{icon}</span>
    </div>
    <div className="text-4xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent mb-2">
      {number}
    </div>
    <div className="text-slate-600 font-medium">{label}</div>
  </div>
);

export const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 py-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full p-2 mb-8 shadow-lg">
              <div className="bg-white rounded-full p-3">
                <span className="text-2xl">🏛️</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent mb-6">
              {t('about_title')}
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Kültürel mirası yaşatma yolculuğumuz
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <StatsCard number="10+" label="Tarihi Eser" icon="🏛️" />
              <StatsCard number="4" label="Dil Desteği" icon="🌍" />
              <StatsCard number="2024" label="Kuruluş Yılı" icon="⭐" />
              <StatsCard number="∞" label="Kültürel Miras" icon="💎" />
            </div>
          </div>
          
          {/* Info Cards */}
          <div className="space-y-16">
            <InfoCard 
              title={t('about_purpose_title')}
              text={t('about_purpose_text')}
              imageUrl="https://picsum.photos/seed/purpose/800/600"
              icon="🎯"
              gradient="hover:bg-gradient-to-br hover:from-emerald-50/50 hover:to-teal-50/50"
            />
            <InfoCard 
              title={t('about_mission_title')}
              text={t('about_mission_text')}
              imageUrl="https://picsum.photos/seed/mission/800/600"
              reverse={true}
              icon="🚀"
              gradient="hover:bg-gradient-to-br hover:from-teal-50/50 hover:to-cyan-50/50"
            />
            <InfoCard 
              title={t('about_vision_title')}
              text={t('about_vision_text')}
              imageUrl="https://picsum.photos/seed/vision/800/600"
              icon="👁️"
              gradient="hover:bg-gradient-to-br hover:from-cyan-50/50 hover:to-emerald-50/50"
            />
          </div>

          {/* Call to Action */}
          <div className="mt-24 text-center">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Kültürel Yolculuğa Katılın
              </h2>
              <p className="text-emerald-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Balkan coğrafyasının zengin mirasını keşfetmek için eserlerimizi ziyaret edin
              </p>
              <button className="bg-white text-emerald-700 font-bold py-4 px-8 rounded-2xl hover:bg-emerald-50 hover:scale-105 transition-all duration-300 shadow-lg text-lg">
                Eserleri Keşfet 🏛️
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
