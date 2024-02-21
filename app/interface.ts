export interface simplifiedProduct {
    _id:string;
    imageUrl: string;
    price: number;
    description: string;
    slug: string;
    categoryName: string;
    name: string;
}

export interface fullProduct {
    _id: string;
    images: any;
    price: number;
    description: string;
    slug: string;
    categoryName: string;
    name: string;
    price_id: string;
}