import { Component } from '@angular/core';
import { CartService } from './services/cart.service';
import { Trip } from './trip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tripAgency';
  constructor() { }
}
