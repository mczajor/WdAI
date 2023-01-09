import { Component, Output, EventEmitter } from '@angular/core';
import { Trip } from '../../trip';
import { TripsService } from '../../services/trips.service';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent {

  destination!: string;
  country!: string;
  startDate!: string;
  endDate!: string;
  price!: string;
  description!: string;
  quantityLeft!: string;
  image!: string;

  constructor(private tripsService: TripsService){}


  onSubmit(){
    if(!this.destination){
      alert('Please add a destination');
      return;
    }
    const newTrip: Trip = {
      destination: this.destination,
      country: this.country,
      startDate: this.startDate,
      endDate: this.endDate,
      price: parseInt(this.price),
      quantityLeft: parseInt(this.quantityLeft),
      description: this.description,
      rating: 0,
      totalRating: 0,
      imageUrl: this.image,
      comments: []
    }

    this.tripsService.addTrip(newTrip);
    this.destination = '';
    this.country = '';
    this.startDate = '';
    this.endDate = '';
    this.price = '';
    this.description = '';
    this.quantityLeft = '';
    this.image = '';
  }
}
