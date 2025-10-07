
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPinIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface ArtworkCardProps {
  slug: string;
  title: string;
  thumbnail: string;
  location: string;
}

export const ArtworkCard: React.FC<ArtworkCardProps> = ({ slug, title, thumbnail, location }) => {
  const { t } = useTranslation();
  
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-48 object-cover" 
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Location Badge */}
        <div className="flex items-center mb-3">
          <div className="flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">
            <MapPinIcon className="w-4 h-4 mr-1" />
            {location}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-800 mb-4 line-clamp-2">
          {title}
        </h3>

        {/* Button */}
        <Link 
          to={`/eser/${slug}`} 
          className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
        >
          <span className="mr-2">{t('artwork_card_button')}</span>
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
