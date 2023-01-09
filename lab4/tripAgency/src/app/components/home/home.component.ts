import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  center: google.maps.LatLngLiteral = {lat: 32.0853, lng: 34.7818};
  
}
