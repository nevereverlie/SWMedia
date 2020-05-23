import { Category } from './category';

export interface Product {
  id: number;
  description: string;
  price: string;
  category: Category;
}
