
export interface Game {
  name: string;
  image: string;
  description: string;
  size: string;
  downloads: string;
  reviews: string;
  platforms: ('android' | 'apple' | 'windows' | 'xbox')[];
}