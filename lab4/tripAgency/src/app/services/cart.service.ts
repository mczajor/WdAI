import { Injectable } from '@angular/core';
import { Trip } from '../trip'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Trip[] = [];
  total: number = 0;

  constructor() { }

  onAdd(trip: Trip) {
    this.items.push(trip);
    this.total += trip.price;
  }
  
  onRemove(trip: Trip) {
    const index = this.items.indexOf(trip);
    if(index > -1){
      this.items.splice(index, 1);
      this.total -= trip.price;
    }
    
  }
}
