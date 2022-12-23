import { Component, Output, EventEmitter } from '@angular/core';
import { Trip } from '../../trip';

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
  price!: number;
  description!: string;
  quantityLeft!: number;
  image!: string;


  @Output() onAddTrip: EventEmitter<Trip> = new EventEmitter();

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
      price: this.price,
      quantityLeft: this.quantityLeft,
      description: this.description,
      rating: 0,
      image: this.image
    }
    this.onAddTrip.emit(newTrip);
    this.destination = '';
    this.country = '';
    this.startDate = '';
    this.endDate = '';
    this.price = 0;
    this.description = '';
    this.quantityLeft = 0;
    this.image = '';
  }
}
