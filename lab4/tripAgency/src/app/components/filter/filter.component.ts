import { Component } from '@angular/core';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  destination!: string;
  country!: string;
  startDate!: string;
  endDate!: string;
  minPrice!: number;
  maxPrice!: number;
  spotsLeft!: number;
  filter: FilterPipe = new FilterPipe();
  
  constructor() { }
  onSubmit(){
    this.filter.setVariables(this.destination, this.country, this.minPrice, this.maxPrice, this.startDate, this.endDate, this.spotsLeft);
  }
}
