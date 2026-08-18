export interface Irating {
  rate: number;
  count: number;
}

export interface Iproduct {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: Irating; 
}