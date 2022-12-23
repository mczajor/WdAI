import { Pipe, PipeTransform } from '@angular/core';
import { Trip } from '../trip';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  destination: string = '';
  country: string = '';
  minPrice: number = 0;
  maxPrice: number = Infinity;
  startDate: string = '';
  endDate: string = '';
  spotsLeft: number = 0;

  transform(value: Trip[]): any {
    if(value.length == 0){
      return value;
    }
    let filtered = value.filter(trip => trip.destination.toLowerCase().includes(this.destination.toLowerCase()));
    filtered = filtered.filter(trip => trip.country.toLowerCase().includes(this.country.toLowerCase()));
    filtered = filtered.filter(trip => trip.price >= this.minPrice && trip.price <= this.maxPrice);
    filtered = filtered.filter(trip => trip.startDate >= this.startDate && trip.endDate <= this.endDate);
    filtered = filtered.filter(trip => trip.quantityLeft >= this.spotsLeft);
    return filtered;
  }

  setVariables(destination: string, country: string, minPrice: number,
     maxPrice: number, startDate: string, endDate: string, spotsLeft: number){
    this.destination = destination;
    this.country = country;
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
    this.startDate = startDate;
    this.endDate = endDate;
    this.spotsLeft = spotsLeft;
  }
}
