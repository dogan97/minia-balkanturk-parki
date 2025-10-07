
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BuildingOfficeIcon, GlobeAltIcon, StarIcon, Squares2X2Icon, FlagIcon, RocketLaunchIcon, EyeIcon } from '@heroicons/react/24/outline';

const InfoCard: React.FC<{ 
  title: string; 
  text: string; 
  imageUrl: string; 
  reverse?: boolean;
  icon?: React.ReactNode;
}> = ({ title, text, imageUrl, reverse = false, icon }) => (
  <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
    <div className={`flex flex-col lg:flex-row items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className="lg:w-1/2 p-8 lg:p-12">
        <div className="flex items-center mb-6">
          {icon && (
            <div className="mr-4">
              {React.cloneElement(icon as React.ReactElement, {
                className: "w-8 h-8 text-blue-600"
              })}
            </div>
          )}
          <h3 className="text-2xl font-bold text-slate-800">
            {title}
          </h3>
        </div>
        <p className="text-gray-600 leading-relaxed text-lg">
          {text}
        </p>
        <div className="mt-8">
          <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-80 lg:h-96 object-cover" 
        />
      </div>
    </div>
  </div>
);

const StatsCard: React.FC<{ number: string; label: string; icon: React.ReactNode }> = ({ number, label, icon }) => (
  <div className="text-center bg-white p-6 rounded-lg shadow-lg">
    <div className="flex justify-center mb-4">
      {React.cloneElement(icon as React.ReactElement, {
        className: "w-12 h-12 text-blue-600"
      })}
    </div>
    <div className="text-3xl font-bold text-slate-800 mb-2">
      {number}
    </div>
    <div className="text-gray-600 font-medium">{label}</div>
  </div>
);

export const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white pt-24">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <BuildingOfficeIcon className="w-12 h-12 text-white mx-auto" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('about_title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Kültürel mirası yaşatma yolculuğumuz
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Stats Section */}
          <div className="bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <StatsCard number="10+" label="Tarihi Eser" icon={<BuildingOfficeIcon />} />
              <StatsCard number="4" label="Dil Desteği" icon={<GlobeAltIcon />} />
              <StatsCard number="2024" label="Kuruluş Yılı" icon={<StarIcon />} />
              <StatsCard number="∞" label="Kültürel Miras" icon={<Squares2X2Icon />} />
            </div>
          </div>
          
          {/* Info Cards */}
          <div className="space-y-16">
            <InfoCard 
              title={t('about_purpose_title')}
              text={t('about_purpose_text')}
              imageUrl="https://picsum.photos/seed/purpose/800/600"
              icon={<FlagIcon />}
            />
            <InfoCard 
              title={t('about_mission_title')}
              text={t('about_mission_text')}
              imageUrl="https://picsum.photos/seed/mission/800/600"
              reverse={true}
              icon={<RocketLaunchIcon />}
            />
            <InfoCard 
              title={t('about_vision_title')}
              text={t('about_vision_text')}
              imageUrl="https://picsum.photos/seed/vision/800/600"
              icon={<EyeIcon />}
            />
          </div>

          {/* Call to Action */}
          <div className="mt-24">
            <div className="bg-slate-800 rounded-lg p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Kültürel Yolculuğa Katılın
              </h2>
              <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Balkan coğrafyasının zengin mirasını keşfetmek için eserlerimizi ziyaret edin
              </p>
              <button className="bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-lg">
                Eserleri Keşfet 🏛️
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
