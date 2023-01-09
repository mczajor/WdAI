import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})

export class RatingComponent implements OnInit {
  @Input() rating!: number;
  @Output() ratingUpdated = new EventEmitter();

  totalStar: number = 5;
  ratingArray: number[] = [];

  constructor() { }

  ngOnInit() {
    for (let index = 0; index < this.totalStar; index++) {
      this.ratingArray.push(index);
    }
  }
  
  calculateRating(rating: number) {
    this.ratingUpdated.emit(rating);
  }

  iconStatus(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}