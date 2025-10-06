
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FeatureCard: React.FC<{ 
  icon: string; 
  title: string; 
  description: string;
  gradient: string;
}> = ({ icon, title, description, gradient }) => (
  <div className={`group bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-emerald-100/50 hover:scale-[1.02] ${gradient}`}>
    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
      <span className="text-3xl">{icon}</span>
    </div>
    <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
      {title}
    </h3>
    <p className="text-slate-700 text-center leading-relaxed">{description}</p>
  </div>
);

const StatCard: React.FC<{ number: string; label: string; icon: string }> = ({ number, label, icon }) => (
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

export const HomePage: React.FC = () => {
  const { t } = useTranslation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full p-3 mb-8 shadow-lg">
              <div className="bg-white rounded-full p-4">
                <span className="text-4xl">🏰</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent mb-8 leading-tight">
              {t('home_title')}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium mb-12">
              {t('home_subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/eserler"
                className="group inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-4 px-10 rounded-2xl text-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <span className="mr-3">{t('home_button')}</span>
                <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/hakkimizda"
                className="inline-flex items-center justify-center bg-white/80 backdrop-blur-sm text-emerald-700 font-semibold py-4 px-10 rounded-2xl text-xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-emerald-200/50"
              >
                Hakkımızda
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <StatCard number="9" label="Tarihi Eser" icon="🏛️" />
              <StatCard number="4" label="Dil Desteği" icon="🌍" />
              <StatCard number="2024" label="Kuruluş Yılı" icon="⭐" />
              <StatCard number="∞" label="Kültürel Miras" icon="💎" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent mb-6">
              Neden Biz?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon="🎯"
              title="Kültürel Miras"
              description="Balkan coğrafyasının zengin tarihi ve kültürel mirasını keşfedin"
              gradient="hover:bg-gradient-to-br hover:from-emerald-50/50 hover:to-teal-50/50"
            />
            <FeatureCard
              icon="🌍"
              title="Çok Dilli"
              description="Türkçe, İngilizce, Bulgarca ve Sırpça dil desteği"
              gradient="hover:bg-gradient-to-br hover:from-teal-50/50 hover:to-cyan-50/50"
            />
            <FeatureCard
              icon="🏛️"
              title="Minyatür Sanat"
              description="Tarihi yapıların detaylı minyatür reprodüksiyonları"
              gradient="hover:bg-gradient-to-br hover:from-cyan-50/50 hover:to-emerald-50/50"
            />
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-emerald-100/50">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full p-2 mb-6 shadow-lg">
                <div className="bg-white rounded-full p-3">
                  <span className="text-2xl">📍</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent mb-4">
                {t('home_location_title')}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.22533089648!2d28.9380720153896!3d40.22675767938743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca1342674e2a85%3A0xf2e4e3a478c18778!2sMinia%20Balkant%C3%BCrk%20Park%C4%B1!5e0!3m2!1sen!2str!4v1684321098765!5m2!1sen!2str" 
                    width="100%" 
                    height="400"
                    className="rounded-xl"
                    style={{ border: 0 }} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Park Location Map">
                  </iframe>
                </div>
              </div>
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h3 className="text-3xl font-bold text-slate-800 mb-6">Minia Balkantürk Parkı</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center lg:justify-start">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white text-lg">📍</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Adres</p>
                      <p className="text-slate-600">Ertuğrul, 16120 Nilüfer/Bursa, Türkiye</p>
                    </div>
                  </div>
                  <div className="flex items-start justify-center lg:justify-start">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-lg">ℹ️</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 mb-2">Hakkında</p>
                      <p className="text-slate-600 leading-relaxed">
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
