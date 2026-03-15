import { TourPackage, TaxiService, Review } from './types';

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'char-dham-yatra',
    title: 'Complete Char Dham Yatra',
    duration: '11 Nights / 12 Days',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800',
    highlights: ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'],
    category: 'chardham',
    price: '₹28,500'
  },
  {
    id: 'rajasthan-royal',
    title: 'Royal Rajasthan Heritage Tour',
    duration: '7 Nights / 8 Days',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800',
    highlights: ['Jaipur', 'Jodhpur', 'Udaipur', 'Desert Safari'],
    category: 'uttarakhand', // Reusing category for simplicity or adding 'india'
    price: '₹22,000'
  },
  {
    id: 'kerala-backwaters',
    title: 'Kerala Backwaters & Hills',
    duration: '5 Nights / 6 Days',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800',
    highlights: ['Munnar', 'Alleppey Houseboat', 'Thekkady'],
    category: 'adventure',
    price: '₹19,500'
  },
  {
    id: 'kedarnath-yatra',
    title: 'Kedarnath Special Tour',
    duration: '3 Nights / 4 Days',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800',
    highlights: ['Kedarnath Trek', 'Gaurikund', 'Rudraprayag'],
    category: 'spiritual',
    price: '₹12,500'
  },
  {
    id: 'goa-beach',
    title: 'Vibrant Goa Beach Vacation',
    duration: '3 Nights / 4 Days',
    image: 'https://images.unsplash.com/photo-1512789172734-8b09f9d4674b?auto=format&fit=crop&q=80&w=800',
    highlights: ['North Goa Beaches', 'Old Goa Churches', 'Water Sports'],
    category: 'adventure',
    price: '₹14,500'
  }
];

export const TAXI_SERVICES: TaxiService[] = [
  {
    id: 'sedan',
    type: 'Sedan (Swift Dzire/Etios)',
    description: 'Perfect for small families and Pan-India outstation tours.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
    capacity: '4 + 1 Seater'
  },
  {
    id: 'suv',
    type: 'SUV (Innova Crysta/Ertiga)',
    description: 'Comfortable for long distance All India journeys.',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
    capacity: '6 + 1 Seater'
  },
  {
    id: 'tempo',
    type: 'Tempo Traveller',
    description: 'Best for large groups and All India pilgrimage tours.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
    capacity: '12 - 17 Seater'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    rating: 5,
    comment: 'Excellent service for our Char Dham Yatra. The driver was very professional and the car was clean.',
    date: '2023-10-15'
  },
  {
    id: '2',
    name: 'Priya Verma',
    rating: 5,
    comment: 'Yadav Holidays made our Mussoorie trip memorable. Highly recommended for local sightseeing in Haridwar.',
    date: '2023-11-02'
  },
  {
    id: '3',
    name: 'Amit Patel',
    rating: 4,
    comment: 'Reliable taxi service. We booked a tempo traveller for our group and it was a smooth experience.',
    date: '2023-09-20'
  }
];
