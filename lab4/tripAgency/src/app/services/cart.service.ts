import { Injectable } from '@angular/core';
import { Trip } from '../trip'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Trip[] = [];

  constructor() { }

  onAdd(trip: Trip) {
    this.items.push(trip);
  }
  
  onRemove(trip: Trip) {
    const index = this.items.indexOf(trip);
    if(index > -1){
      this.items.splice(index, 1);
    }
    
  }
}
