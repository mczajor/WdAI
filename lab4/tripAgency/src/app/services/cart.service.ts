import { getLocaleCurrencyCode } from '@angular/common';
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
  getAll(){
    const count:{[name:string]:number} = {};
    this.items.forEach(element => {
      if(element.id == undefined){
        return;
      }
      count[element.id] = ( count[element.id] || 0 ) + 1;
    });
    return count;
  }
}