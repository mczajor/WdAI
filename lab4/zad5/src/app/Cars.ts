import { Car } from './Car';
export const CARS: Car[] = [
    {
        brandName: 'Audi',
        models: [{
            name: 'A4',
            colors: ['black', 'white', 'red', 'blue', 'green']
        }]
    },
    {
        brandName: 'BMW',
        models: [{
            name: 'X5',
            colors: ['black', 'white']
        }]
    },
    {
        brandName: 'Mercedes',
        models: [{
            name:'C220',
            colors: ['black', 'white', 'red', 'blue']
        }]
    },
    {
        brandName: 'Opel',
        models: [{
            name:'Astra',
            colors: ['black', 'white', 'red', 'blue', 'green'],
        },
        {
            name: 'Vectra',
            colors: ['black', 'blue', 'green']
        },
        {
            name: 'Golf',
            colors: ['black', 'white', 'red', 'green']
        },
        {
            name: 'IDK',
            colors: ['white', 'red', 'blue', 'green']
        },
        {
            name: 'IDGAF',
            colors: ['black', 'white']
        }]
    }
]