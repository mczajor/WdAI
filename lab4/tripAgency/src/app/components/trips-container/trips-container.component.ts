import { Component, Output, EventEmitter } from '@angular/core';
import { TripsService } from '../../services/trips.service';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs'
import { Trip } from '../../trip';

@Component({
  selector: 'app-trips-container',
  templateUrl: './trips-container.component.html',
  styleUrls: ['./trips-container.component.css']
})
export class TripsContainerComponent {

  trips: Trip[] = [];
  subscription!: Subscription;
  mostExpensive!: Trip;
  leastExpensive!: Trip;
  @Output() tripAdded = new EventEmitter<Trip>();
  @Output() tripRemoved = new EventEmitter<Trip>();

  constructor(private tripsService: TripsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.tripsService.getTrips().subscribe((trips) => {
      this.trips = trips;
      this.findMostExpensive();
      this.findLeastExpensive();
    });
  }

  findMostExpensive(){
    let filtered = this.trips.filter(trip => trip.quantityLeft > 0);
    this.mostExpensive = filtered[0];
    filtered.forEach(trip => {
      if(trip.price > this.mostExpensive.price){
        this.mostExpensive = trip;
      }
    });
  }

  findLeastExpensive(){
    let filtered = this.trips.filter(trip => trip.quantityLeft > 0);
    this.leastExpensive = filtered[0];
    filtered.forEach(trip => {
      if(trip.price < this.leastExpensive.price){
        this.leastExpensive = trip;
      }
    });
  }

  returnTrip(trip: Trip){
    trip.quantityLeft++;
    if(trip.quantityLeft == 1){
      if(trip.price >= this.mostExpensive.price){
        this.mostExpensive = trip;
      } else if(trip.price <= this.leastExpensive.price){
        this.leastExpensive = trip;
      }
    }
    this.cartService.onRemove(trip);
  }

  addToCart(trip: Trip){
    trip.quantityLeft--;
    if(trip.quantityLeft == 0){
      if(trip == this.mostExpensive){
        this.findMostExpensive();
      } else if(trip == this.leastExpensive){
        this.findLeastExpensive();
      } 
    }
    this.cartService.onAdd(trip);
  }

  deleteTrip(trip: Trip){
    this.tripsService.deleteTrip(trip).subscribe(() => {
      this.trips = this.trips.filter(t => t.id != trip.id);
      this.findMostExpensive();
      this.findLeastExpensive();
    });
  }

  addTrip(trip: Trip){
    this.tripsService.addTrip(trip).subscribe((trip) => {
      this.trips.push(trip);
      this.findMostExpensive();
      this.findLeastExpensive();
    });
  }
}
