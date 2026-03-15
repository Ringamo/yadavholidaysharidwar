export interface TourPackage {
  id: string;
  title: string;
  duration: string;
  image: string;
  price?: string;
  highlights: string[];
  category: 'chardham' | 'uttarakhand' | 'adventure' | 'spiritual';
}

export interface TaxiService {
  id: string;
  type: string;
  description: string;
  image: string;
  capacity: string;
  pricePerKm?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}
