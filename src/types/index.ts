export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  tag: string;
  description?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface VipPlan {
  id: number;
  name: string;
  price: number;
  benefits: string[];
  period: string;
}