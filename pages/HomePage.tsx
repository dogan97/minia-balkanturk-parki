
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BuildingOfficeIcon, MapPinIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

const FeatureCard: React.FC<{ 
  icon: string; 
  title: string; 
  description: string;
}> = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
      <span className="text-3xl">{icon}</span>
    </div>
    <h3 className="text-xl font-semibold text-center mb-4 text-slate-800">
      {title}
    </h3>
    <p className="text-slate-600 text-center leading-relaxed">{description}</p>
  </div>
);


export const HomePage: React.FC = () => {
  const { t } = useTranslation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
        {/* Hero Section */}
      <div className="relative bg-slate-900 text-white min-h-screen flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://picsum.photos/seed/minia-park/1920/1080')"
          }}
        ></div>
        
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-slate-900/70"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="text-center">
            <div className="mb-8">
              <BuildingOfficeIcon className="w-12 h-12 text-white mx-auto drop-shadow-lg" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight drop-shadow-lg">
              {t('home_title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12 drop-shadow-md">
              {t('home_subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/eserler"
                className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:bg-blue-700 transition-colors duration-300"
              >
                <span className="mr-2">{t('home_button')}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/hakkimizda"
                className="inline-flex items-center justify-center bg-transparent text-white font-semibold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-slate-900 transition-colors duration-300 border border-gray-300"
              >
                Hakkımızda
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-slate-800 mb-2">9</div>
              <div className="text-gray-600 font-medium">Tarihi Eser</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-slate-800 mb-2">4</div>
              <div className="text-gray-600 font-medium">Dil Desteği</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-slate-800 mb-2">1:25</div>
              <div className="text-gray-600 font-medium">Ortalama Ölçek</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-slate-800 mb-2">∞</div>
              <div className="text-gray-600 font-medium">Kültürel Değer</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Neden Biz?
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon="🎯"
              title="Kültürel Miras"
              description="Balkan coğrafyasının zengin tarihi ve kültürel mirasını keşfedin"
            />
            <FeatureCard
              icon="🌍"
              title="Çok Dilli"
              description="Türkçe, İngilizce, Bulgarca ve Sırpça dil desteği"
            />
            <FeatureCard
              icon="🏛️"
              title="Minyatür Sanat"
              description="Tarihi yapıların detaylı minyatür reprodüksiyonları"
            />
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg">
            <div className="text-center mb-12">
              <div className="mb-6">
                <MapPinIcon className="w-8 h-8 text-blue-600 mx-auto" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {t('home_location_title')}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gray-100 rounded-lg p-4">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.22533089648!2d28.9380720153896!3d40.22675767938743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca1342674e2a85%3A0xf2e4e3a478c18778!2sMinia%20Balkant%C3%BCrk%20Park%C4%B1!5e0!3m2!1sen!2str!4v1684321098765!5m2!1sen!2str" 
                    width="100%" 
                    height="400"
                    className="rounded-lg"
                    style={{ border: 0 }} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Park Location Map">
                  </iframe>
                </div>
              </div>
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Minia Balkantürk Parkı</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center lg:justify-start">
                    <div className="mr-4">
                      <MapPinIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Adres</p>
                      <p className="text-gray-600">Ertuğrul, 16120 Nilüfer/Bursa, Türkiye</p>
                    </div>
                  </div>
                  <div className="flex items-start justify-center lg:justify-start">
                    <div className="mr-4 mt-1">
                      <InformationCircleIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 mb-2">Hakkında</p>
                      <p className="text-gray-600 leading-relaxed">
                        Balkan coğrafyasının tarihi ve kültürel zenginliklerini bir arada bulabileceğiniz eşsiz bir mekan. 
                        9 farklı tarihi yapının minyatür reprodüksiyonları ile kültürel bir yolculuk deneyimi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
