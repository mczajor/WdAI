export interface Trip{
    id?: string;
    destination: string;
    country: string;
    startDate: string;
    endDate: string;
    price: number;
    description: string;
    quantityLeft: number;
    quantityInCart?: number;
    rating: number;
    totalRating: number;
    imageUrl: string;
    comments: Comment[];
}

export interface Comment{
    id?:string;
    username: string;
    tripname: string;
    content: string;
    date?: string;
}