export interface Products {
  data: any;
  id: number;
  productName: string;
  quantity: number;
  costPrice: number;
  sellPrice: number;
  margin: number;
  category: string;
  updatedOn: any;
  totalAmount: number;
  quantityNumber: number;
}

export interface Sales {
  data: any;
  id: number;
  productName: string;
  quantity: number;
  Price: number;
  Instock: number;
  totalAmount: number;
  updatedOn: any;
}
