import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() numberOfItems!: number;

  constructor(protected cartService: CartService) { 
  }
  
}
