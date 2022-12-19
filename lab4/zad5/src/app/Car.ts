export interface Car {
    brandName: string;
    models: Model[]; 
};

export interface Model {
    name: string;
    colors: string[];
}
