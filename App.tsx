
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ArtworksPage } from './pages/ArtworksPage';
import { ArtworkDetailPage, NotFoundPage } from './pages/ArtworkDetailPage';
import './i18n/i18n'; // Initialize i18next

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="hakkimizda" element={<AboutPage />} />
          <Route path="eserler" element={<ArtworksPage />} />
          <Route path="eser/:slug" element={<ArtworkDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
