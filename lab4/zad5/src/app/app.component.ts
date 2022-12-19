import { Component } from '@angular/core';
import { Car } from './Car';
import { CARS } from './Cars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zad5';
  allBrands: string[] = [];
  allModels: string[] = [];
  allColors: string[] = []; 
  selectedBrand: string = '';
  selectedModel: string = '';
  selectedColor: string = '';
  carSpecs: string = '';

  constructor() { 
    for (let car of CARS) {
      this.allBrands.push(car.brandName);
    }
  }
  selectModel(brand: string) {
    this.selectedBrand = brand;
    this.selectedModel = '';
    this.selectedColor = '';
    this.allModels = [];
    this.allColors = [];
    for (let car of CARS) {
      if (car.brandName == brand) {
        for (let model of car.models) {
          this.allModels.push(model.name);
        }
        break;
      }
    }
  }
  selectColor(model: string) {
    this.selectedModel = model;
    this.selectedColor = '';
    this.allColors = [];
    for (let car of CARS) {
      if (car.brandName == this.selectedBrand) {
        for (let model of car.models) {
          if (model.name == this.selectedModel) {
            for (let color of model.colors) {
              this.allColors.push(color);
            }
            break;
          }
        }
        break;
      }
    }
  }
  printSpecs(color: string) {
    this.selectedColor = color;
    this.carSpecs = `Brand: ${this.selectedBrand}, Model: ${this.selectedModel}, Color: ${this.selectedColor}`;
  }

}
