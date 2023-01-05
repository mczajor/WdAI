import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripsService } from '../../services/trips.service'
import { Trip, Comment } from '../../trip'

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent {
  trip!: Trip;

  username!: string;
  content!: string;

  constructor(private tripsService: TripsService, private route: ActivatedRoute){}
  
  ngOnInit(){
    let id = this.route.snapshot.paramMap.get('id') as string;
    this.tripsService.getOne(id).subscribe((trip) => {
      this.trip = trip as Trip;
    });
  }

  onSubmit(){
    const newComment: Comment = {
      username: this.username,
      content: this.content,
      tripname: this.trip.destination + " " + this.trip.country
    }
    console.log(newComment);
    this.trip.comments.push(newComment);
    this.tripsService.updateTrip(this.trip);
    this.username = "";
    this.content = "";
  }
}
