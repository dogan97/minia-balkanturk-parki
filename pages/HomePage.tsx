
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BuildingOfficeIcon, MapPinIcon, InformationCircleIcon, GlobeAltIcon, SparklesIcon } from '@heroicons/react/24/outline';

const FeatureCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}> = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center mb-6 mx-auto text-white">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-center mb-4 text-slate-800">
      {title}
    </h3>
    <p className="text-slate-600 text-center leading-relaxed">{description}</p>
  </div>
);


export const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const sliderImages = useMemo(() => [
    {
      url: 'https://picsum.photos/seed/minia-park-1/1920/1080',
      alt: 'Minia Balkantürk Parkı 1',
    },
    {
      url: 'https://picsum.photos/seed/minia-park-2/1920/1080',
      alt: 'Minia Balkantürk Parkı 2',
    },
    {
      url: 'https://picsum.photos/seed/minia-park-3/1920/1080',
      alt: 'Minia Balkantürk Parkı 3',
    },
  ], []);
  const [currentSlide, setCurrentSlide] = useState(0);
  const dragStartXRef = useRef<number | null>(null);
  const dragActiveRef = useRef(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-advance slider
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [sliderImages.length]);

  const goTo = (index: number) => setCurrentSlide(index);
  const next = () => setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  const prev = () => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

  const onPointerDown = (clientX: number) => {
    dragStartXRef.current = clientX;
    dragActiveRef.current = true;
  };
  const onPointerMove = (clientX: number) => {
    if (!dragActiveRef.current || dragStartXRef.current === null) return;
    const deltaX = clientX - dragStartXRef.current;
    // threshold for swipe
    if (Math.abs(deltaX) > 60) {
      if (deltaX < 0) next(); else prev();
      dragActiveRef.current = false;
      dragStartXRef.current = null;
    }
  };
  const onPointerUp = () => {
    dragActiveRef.current = false;
    dragStartXRef.current = null;
  };

  return (
    <div className="bg-white">
        {/* Hero Slider Section */}
      <div 
        className="relative bg-slate-900 text-white min-h-screen flex items-center"
        onMouseDown={(e) => onPointerDown(e.clientX)}
        onMouseMove={(e) => onPointerMove(e.clientX)}
        onMouseUp={onPointerUp}
        onMouseLeave={onPointerUp}
        onTouchStart={(e) => onPointerDown(e.touches[0].clientX)}
        onTouchMove={(e) => onPointerMove(e.touches[0].clientX)}
        onTouchEnd={onPointerUp}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 select-none touch-pan-y"
          style={{
            backgroundImage: `url('${sliderImages[currentSlide].url}')`
          }}
          aria-label={sliderImages[currentSlide].alt}
        ></div>
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-slate-900/70"></div>
        {/* Slider Controls */}
        <div className="absolute inset-x-0 bottom-8 z-10 flex items-center justify-center gap-4">
          <button onClick={prev} className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 text-slate-900 hover:bg-white transition-colors" aria-label="Previous slide">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div className="flex items-center gap-2">
            {sliderImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentSlide ? 'bg-white w-6' : 'bg-white/60 hover:bg-white'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 text-slate-900 hover:bg-white transition-colors" aria-label="Next slide">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
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
                {t('nav_about')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Visitor Testimonials */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center rounded-full px-3 py-1 bg-rose-50 text-rose-700 text-xs font-semibold mb-4">
              Ziyaretçi Yorumlarıaaa
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Ziyaretçilerimiz Ne Diyor?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Gerçek deneyimler, parkı keşfetmeden önce size ilham versin.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              name: 'Elif K.', city: 'Bursa', text: 'Ailece çok keyif aldığımız bir gezi oldu. Çocuklar eserleri QR ile keşfetmeyi çok sevdi!',
            }, {
              name: 'Marko S.', city: 'Belgrad', text: 'Balkan kültürünün zenginliğini küçük ölçekte görmek çok etkileyici. Tasarım ve bilgilendirme başarılı.',
            }, {
              name: 'Anita P.', city: 'Sofya', text: 'Ziyaret etmeye kesinlikle değer. Çok dilli içerik sayesinde her şey anlaşılırdı.',
            }].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-700 font-bold flex items-center justify-center mr-3">
                    {t.name.split(' ')[0].charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{t.name}</p>
                    <p className="text-sm text-gray-600">{t.city}</p>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed">“{t.text}”</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sponsors / Partners */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center rounded-full px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold mb-4">
              Sponsorlar ve İş Ortakları
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Destekçilerimiz</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {[
              { name: 'BalkanBank', url: 'https://images.unsplash.com/photo-1583209814683-37021b3c85bf?q=80&w=600&auto=format&fit=crop' },
              { name: 'Nilüfer Belediyesi', url: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=600&auto=format&fit=crop' },
              { name: 'Kültür Vakfı', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop' },
              { name: 'TravelCo', url: 'https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=600&auto=format&fit=crop' },
              { name: 'Heritage Inc.', url: 'https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=600&auto=format&fit=crop' },
              { name: 'EduTech', url: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=600&auto=format&fit=crop' },
            ].map((item, idx) => (
              <div key={idx} className="h-16 bg-white border border-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-50 transition-colors overflow-hidden">
                <img 
                  src={item.url} 
                  alt={`${item.name} logo`} 
                  className="h-full w-full object-cover opacity-80 hover:opacity-100 transition-opacity" 
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.onerror = null;
                    target.src = `https://picsum.photos/seed/sponsor-${idx}/600/200`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ / SSS */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full px-3 py-1 bg-sky-50 text-sky-700 text-xs font-semibold mb-4">
              SSS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Sıkça Sorulan Sorular</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {[
              { q: 'QR kodu nasıl okuturum?', a: 'Telefonunuzun kamerasını açın ve kodu görüntüleyin; bağlantı otomatik olarak çıkar. Alternatif olarak bir QR okuma uygulaması kullanabilirsiniz.' },
              { q: 'Dil seçeneklerini nereden değiştiririm?', a: 'Sağ üstteki dil anahtarına tıklayarak Türkçe, İngilizce, Bulgarca veya Sırpça seçebilirsiniz.' },
              { q: 'Park giriş saatleri nelerdir?', a: 'Mevsime göre değişebilir. Güncel saatler için resmi duyuruları ve tabelaları takip etmenizi öneririz.' },
            ].map((item, idx) => (
              <details key={idx} className="group bg-white rounded-2xl p-5 md:p-6 shadow-lg border border-gray-100 mb-4">
                <summary className="list-none flex items-start justify-between cursor-pointer">
                  <h3 className="text-base md:text-lg font-semibold text-slate-900 pr-6">{item.q}</h3>
                  <span className="mt-1 inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-900 text-white transition-transform duration-300 group-open:rotate-180">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-slate-700 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
      {/* QR Discovery Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold mb-4">
              QR ile Keşfet
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Parkta QR Kodlarıyla Hızlı Bilgiye Ulaşın
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Eserlerin önündeki QR kodları telefonunuzla okutun, ilgili sayfaya anında gidin.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold mb-4">1</div>
                  <h3 className="font-semibold text-slate-900 mb-2">QR Kodu Bulun</h3>
                  <p className="text-sm text-gray-600">Eserin önünde yer alan tabela üzerindeki QR kodunu bulun.</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold mb-4">2</div>
                  <h3 className="font-semibold text-slate-900 mb-2">Telefonla Okutun</h3>
                  <p className="text-sm text-gray-600">Kamera veya QR uygulaması ile kodu tarayın.</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold mb-4">3</div>
                  <h3 className="font-semibold text-slate-900 mb-2">Detayları Keşfedin</h3>
                  <p className="text-sm text-gray-600">Eserin detay sayfasında tarih, mimari ve kültürel bilgileri inceleyin.</p>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/eserler" className="inline-flex items-center px-5 py-3 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors">
                  Eserleri Gör
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-100 rounded-full blur-2xl opacity-70" aria-hidden="true"></div>
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-xl p-4">
                    <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400 text-sm">QR Önizleme</span>
                    </div>
                    <p className="mt-3 text-sm font-medium text-slate-900">Örnek QR</p>
                    <p className="text-xs text-gray-600">Her esere özel kod</p>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-4">
                    <img src="https://picsum.photos/seed/qr-phone/400/320" alt="QR telefon tarama görseli" className="w-full h-40 object-cover rounded-lg" />
                    <p className="mt-3 text-sm font-medium text-slate-900">Telefonla Tarayın</p>
                    <p className="text-xs text-gray-600">Anında yönlendirme</p>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-4 col-span-2">
                    <img src="https://picsum.photos/seed/qr-detail/800/320" alt="Eser detay sayfası örneği" className="w-full h-48 object-cover rounded-lg" />
                    <p className="mt-3 text-sm font-medium text-slate-900">Eser Detay Sayfası</p>
                    <p className="text-xs text-gray-600">Bilgiler, görseller ve kültürel arka plan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Artworks Section */}
      <div className="relative py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold mb-4">
              Kürasyon
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Öne Çıkan Eserler
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Parkımızın en etkileyici tarihi yapılarını keşfedin ve Balkan kültürünün zenginliğini deneyimleyin
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Featured Artwork 1 */}
            <Link to="/eser/bayrakli-camii" className="group">
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src="https://picsum.photos/seed/bayrakli-camii/800/600" 
                    alt="Bayraklı Camii"
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 inline-flex items-center bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-slate-700">
                    Bosna Hersek
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <MapPinIcon className="w-4 h-4 text-blue-600 mr-1" />
                    <span className="text-sm text-gray-600">Sarajevo, Bosna Hersek</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Bayraklı Camii
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    16. yüzyıldan kalma bu tarihi cami, Osmanlı mimarisinin güzel bir örneğidir.
                  </p>
                </div>
              </div>
            </Link>

            {/* Featured Artwork 2 */}
            <Link to="/eser/stari-most" className="group">
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src="https://picsum.photos/seed/stari-most/800/600" 
                    alt="Stari Most"
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 inline-flex items-center bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-slate-700">
                    Bosna Hersek
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <MapPinIcon className="w-4 h-4 text-blue-600 mr-1" />
                    <span className="text-sm text-gray-600">Mostar, Bosna Hersek</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Stari Most
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    UNESCO Dünya Mirası listesindeki bu tarihi köprü, Balkan mimarisinin simgesidir.
                  </p>
                </div>
              </div>
            </Link>

            {/* Featured Artwork 3 */}
            <Link to="/eser/gazi-husrev-bey-camii" className="group">
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src="https://picsum.photos/seed/gazi-husrev/800/600" 
                    alt="Gazi Husrev Bey Camii"
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 inline-flex items-center bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-slate-700">
                    Bosna Hersek
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <MapPinIcon className="w-4 h-4 text-blue-600 mr-1" />
                    <span className="text-sm text-gray-600">Sarajevo, Bosna Hersek</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Gazi Husrev Bey Camii
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    Klasik Osmanlı mimarisinin mükemmel örneği olan bu camii, 1530 yılında inşa edilmiştir.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link 
              to="/eserler"
              className="inline-flex items-center bg-blue-600 text-white font-semibold py-4 px-8 rounded-full text-lg hover:bg-blue-700 transition-colors duration-300 shadow-sm"
            >
              <span className="mr-2">Tüm Eserleri Görüntüle</span>
              <BuildingOfficeIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold mb-4">
              Deneyim
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Neden Biz?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Ziyaretinizi değerli kılan özellikler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<SparklesIcon className="w-8 h-8" />}
              title="Kültürel Miras"
              description="Balkan coğrafyasının zengin tarihi ve kültürel mirasını keşfedin"
            />
            <FeatureCard
              icon={<GlobeAltIcon className="w-8 h-8" />}
              title="Çok Dilli"
              description="Türkçe, İngilizce, Bulgarca ve Sırpça dil desteği"
            />
            <FeatureCard
              icon={<BuildingOfficeIcon className="w-8 h-8" />}
              title="Minyatür Sanat"
              description="Tarihi yapıların detaylı minyatür reprodüksiyonları"
            />
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="text-center mb-12">
              <div className="mb-6">
                <MapPinIcon className="w-8 h-8 text-blue-600 mx-auto" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                {t('home_location_title')}
              </h2>
              <p className="text-gray-600">Bizi kolayca bulun ve keşfetmeye başlayın</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              <div className="order-2 lg:order-1">
                <div className="bg-gray-100 rounded-xl p-2 h-full">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.22533089648!2d28.9380720153896!3d40.22675767938743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca1342674e2a85%3A0xf2e4e3a478c18778!2sMinia%20Balkant%C3%BCrk%20Park%C4%B1!5e0!3m2!1sen!2str!4v1684321098765!5m2!1sen!2str" 
                    width="100%" 
                    height="420"
                    className="rounded-lg"
                    style={{ border: 0 }} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Park Location Map">
                  </iframe>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Minia Balkantürk Parkı</h3>
                  <div className="space-y-5">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <MapPinIcon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Adres</p>
                        <p className="text-gray-600">Ertuğrul, 16120 Nilüfer/Bursa, Türkiye</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <InformationCircleIcon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 mb-2">Hakkında</p>
                        <p className="text-gray-600 leading-relaxed">
                          Balkan coğrafyasının tarihi ve kültürel zenginliklerini bir arada bulabileceğiniz eşsiz bir mekan. 9 farklı tarihi yapının minyatür reprodüksiyonları ile kültürel bir yolculuk deneyimi.
                        </p>
                      </div>
                    </div>
                    <div className="pt-2">
                      <Link to="/eserler" className="inline-flex items-center px-5 py-3 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors">
                        Parktaki Eserleri Keşfet
                      </Link>
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
