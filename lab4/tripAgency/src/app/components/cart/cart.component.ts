import { Component, OnInit } from '@angular/core';
import { TripsService } from 'src/app/services/trips.service';
import { CartService } from '../../services/cart.service'
import { Trip } from '../../trip';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  tripsInCart: Trip[] = [];
  

  constructor(private cartService:CartService, private tripService: TripsService){}

  ngOnInit(){
    this.tripsInCart = this.cartService.getItems();
  }

  addToCart(trip: Trip){
    this.cartService.onAdd(trip);
    trip.quantityInCart = (trip.quantityInCart || 0) + 1;
    console.log(this.tripsInCart.findIndex(t => t.id == trip.id))
  }

  removeFromCart(trip: Trip){
    this.cartService.onRemove(trip);
    trip.quantityInCart = (trip.quantityInCart || 0) - 1;
    console.log(this.tripsInCart.findIndex(t => t.id == trip.id))
  }

  buyTrip(trip: Trip){
    this.cartService.buyItem(trip);
    trip.quantityLeft -= (trip.quantityInCart || 0);
    trip.quantityInCart = 0;
    this.tripService.updateTrip(trip);
  }

  buyAll(){
    for(let trip of this.tripsInCart){
      this.buyTrip(trip);
      console.log(this.tripsInCart.length)
    }
    this.tripsInCart = [];

  }

}
