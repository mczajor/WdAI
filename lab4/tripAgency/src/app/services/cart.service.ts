import { getLocaleCurrencyCode } from '@angular/common';
import { Injectable } from '@angular/core';
import { Trip } from '../trip'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Trip[] = [];
  totalItems: number = 0;
  total: number = 0;

  constructor() { ;
  }

  onAdd(trip: Trip) {
    const index = this.items.findIndex(item => item.id == trip.id);
    if (index == -1){
      this.items.push(trip);
    } else{
      this.items[index].quantityInCart = trip.quantityInCart;
    }
    this.totalItems += 1;
    this.total += trip.price;
  }
  
  onRemove(trip: Trip) {
    const index = this.items.findIndex(item => item.id == trip.id);
    if(index > -1){ 
      this.items[index].quantityInCart = trip.quantityInCart;
      this.total -= trip.price;
      this.totalItems -= 1;
      if(this.items[index].quantityInCart == 0){
        this.items.splice(index, 1);
      }
    } 
  }

  getItems(){
    return this.items;
  }

  buyItem(trip: Trip){
    const index = this.items.findIndex(item => item.id == trip.id);
    if(index > -1){
      this.items.splice(index, 1);
      this.total -= trip.price*(trip.quantityInCart || 0);
    }
  }

}