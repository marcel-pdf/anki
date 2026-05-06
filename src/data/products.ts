export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'СТУЛ КЛАССИК',
    price: 50000,
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=600&fit=crop',
    category: 'chairs',
  },
  {
    id: 2,
    name: 'STEVE++',
    price: 71300,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
    category: 'chairs',
  },
  {
    id: 3,
    name: 'ДИВАН HERO',
    price: 300000,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop',
    category: 'sofas',
  },
  {
    id: 4,
    name: 'КРОВАТЬ CUBE',
    price: 95000,
    image: 'https://images.unsplash.com/photo-1540932239986-2dcd0f27a8ea?w=800&h=600&fit=crop',
    category: 'beds',
  },
  {
    id: 5,
    name: 'STEVE',
    price: 57500,
    image: 'https://images.unsplash.com/photo-1567538096051-b6643b265b0d?w=800&h=600&fit=crop',
    category: 'chairs',
  },
  {
    id: 6,
    name: 'СКАМЬЯ CLOVER CLASSIC',
    price: 40000,
    image: 'https://images.unsplash.com/photo-1589939705066-5bcc2cdb0626?w=800&h=600&fit=crop',
    category: 'benches',
  },
  {
    id: 7,
    name: 'ТАБУРЕТ CLOVER CLASSIC',
    price: 30000,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop',
    category: 'stools',
  },
  {
    id: 8,
    name: 'ТАБУРЕТ CLOVER 2.0',
    price: 30000,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
    category: 'stools',
  },
  {
    id: 9,
    name: 'СТУЛ STEVE DINNER',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=600&fit=crop',
    category: 'chairs',
  },
  {
    id: 10,
    name: 'ПУФ RUNDA S',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1567538096051-b6643b265b0d?w=800&h=600&fit=crop',
    category: 'poufs',
  },
  {
    id: 11,
    name: 'КРОВАТЬ SOVA',
    price: 110000,
    image: 'https://images.unsplash.com/photo-1540932239986-2dcd0f27a8ea?w=800&h=600&fit=crop',
    category: 'beds',
  },
  {
    id: 12,
    name: 'КРЕСЛО BONO',
    price: 115000,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop',
    category: 'armchairs',
  },
];