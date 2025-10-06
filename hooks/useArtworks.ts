
import { useTranslation } from 'react-i18next';
import { artworksData } from '../data/artworks';
import { Artwork, MultilingualString } from '../types';

type TranslatedArtwork = Omit<Artwork, 'title' | 'description' | 'location' | 'architect' | 'culturalBackground'> & {
  title: string;
  description: string;
  location: string;
  architect: string;
  culturalBackground: string;
};

const translateField = (field: MultilingualString, lang: string): string => {
  return field[lang as keyof MultilingualString] || field.en;
};

export const useArtworks = (): TranslatedArtwork[] => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return artworksData.map(artwork => ({
    ...artwork,
    title: translateField(artwork.title, currentLanguage),
    description: translateField(artwork.description, currentLanguage),
    location: translateField(artwork.location, currentLanguage),
    architect: translateField(artwork.architect, currentLanguage),
    culturalBackground: translateField(artwork.culturalBackground, currentLanguage),
  }));
};

export const useArtworkBySlug = (slug: string | undefined): TranslatedArtwork | undefined => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  if (!slug) return undefined;
  
  const artwork = artworksData.find(art => art.slug === slug);

  if (!artwork) return undefined;

  return {
    ...artwork,
    title: translateField(artwork.title, currentLanguage),
    description: translateField(artwork.description, currentLanguage),
    location: translateField(artwork.location, currentLanguage),
    architect: translateField(artwork.architect, currentLanguage),
    culturalBackground: translateField(artwork.culturalBackground, currentLanguage),
  };
};
