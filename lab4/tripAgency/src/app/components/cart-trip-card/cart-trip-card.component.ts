import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTimes, faArrowRight, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import { Trip } from '../../trip';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { TripsService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-cart-trip-card',
  templateUrl: './cart-trip-card.component.html',
  styleUrls: ['./cart-trip-card.component.css']
})
export class CartTripCardComponent {
  @Input() trip!: Trip;
  @Output() tripAdded = new EventEmitter<Trip>();
  @Output() tripRemoved = new EventEmitter<Trip>();
  @Output() tripBought = new EventEmitter<Trip>();

  faTimes = faTimes;
  faArrowRight = faArrowRight;
  faMinus = faMinus;
  faPlus = faPlus;

  rating: number = Math.floor(Math.random() * 5);

  constructor(private router: Router) { }


  addAmount(){
    if((this.trip.quantityInCart || 0 ) > 0){
      this.tripAdded.emit(this.trip);
    }
  }

  removeAmount(){
    console.log(this.trip.quantityInCart, this.trip.quantityLeft)
    if((this.trip.quantityInCart || 0 ) < this.trip.quantityLeft){
      this.tripRemoved.emit(this.trip);
    }
  }
  
  onRatingChanged(rating: number) {
    this.rating = rating;
  }

  onSelect(){
    this.router.navigate(['/triplist', this.trip.id]);

  }

  onBuy(){
    this.tripBought.emit(this.trip);
  }


}
