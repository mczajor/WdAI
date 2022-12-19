import { Component } from '@angular/core';
import { CARDS } from './cards';
import { Card } from './cardTemplate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zad6';
  longDesc: string = '';
  cards: Card[] = CARDS;

  setLongDesc(title: string){
    for(let card in this.cards){
      if(this.cards[card].title === title){
        this.longDesc = this.cards[card].longDescription;
        break;
      }
    }
  }
}
