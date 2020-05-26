import { Category } from './category';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  category: Category;
}
