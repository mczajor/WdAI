import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Trip } from '../../trip';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent {
  @Input() trip!: Trip;
  @Output() tripAdded = new EventEmitter<Trip>();
  @Output() tripRemoved = new EventEmitter<Trip>();
  @Output() deleteTrip = new EventEmitter<Trip>();

  faTimes = faTimes;
  maxQuantity!: number;

  constructor(){
  }
  
  ngOnInit(): void {
    this.maxQuantity = this.trip.quantityLeft;
  }

  addAmount(){
    if(this.trip.quantityLeft < this.maxQuantity){
      this.tripAdded.emit(this.trip);
    }
  }

  removeAmount(){
    if(this.trip.quantityLeft > 0){
      this.tripRemoved.emit(this.trip);
    }
  }
  onDelete(trip: Trip){
    this.deleteTrip.emit(this.trip);
  }

}
