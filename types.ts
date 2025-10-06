
export interface MultilingualString {
  tr: string;
  en: string;
  bg: string;
  sr: string;
}

export interface Artwork {
  id: number;
  slug: string;
  title: MultilingualString;
  description: MultilingualString;
  location: MultilingualString;
  architect: MultilingualString;
  year: string;
  scale: string;
  culturalBackground: MultilingualString;
  images: string[];
  thumbnail: string;
}
