export type ProductType = {
    status: number;
    id:number;
    name: string;
    originalPrice: number;
    saleOffPrice: number;
    image: string;
    feature: string;
    category: string;
    createdAt: Date;
    updatedAt: Date;
  };
  export type ProductUpdateType = {
    name: string;
    originalPrice: number;
    saleOffPrice: number;
    image: string;
    feature: string;
    category: string;
  };
  