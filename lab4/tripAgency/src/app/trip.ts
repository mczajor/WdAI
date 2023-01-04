export interface Trip{
    id?: number;
    destination: string;
    country: string;
    startDate: string;
    endDate: string;
    price: number;
    description: string;
    quantityLeft: number;
    rating: number;
    imageUrl: string;
}