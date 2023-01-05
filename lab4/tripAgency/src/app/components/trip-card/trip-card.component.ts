import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Trip } from '../../trip';
import { TripsService } from '../../services/trips.service';
import { faTimes, faArrowRight, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

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
  faArrowRight = faArrowRight;
  faMinus = faMinus;
  faPlus = faPlus;
  maxQuantity!: number;
  rating: number = Math.floor(Math.random() * 5);
  starCount: number = 5;

  constructor(private tripService: TripsService, private router: Router){
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
  
  onRatingChanged(rating: number) {
    this.rating = rating;
  }

  onSelect(){
    this.router.navigate(['/triplist', this.trip.id]);
    
  }

}
