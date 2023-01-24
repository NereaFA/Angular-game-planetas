import { PlanetInterface } from './../../models/plantes.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.scss']
})
export class MemoComponent implements OnInit {

  @Input() cards: PlanetInterface [] = [
  {
      id: 1,
      name: 'earth',
      img: 'assets/earth.svg'
  }
 ]

 selectedCard?: PlanetInterface;

ngOnInit(): void {
  this.cards = this.cards.sort((a,b) => 0.5 - Math.random()) //funcion shuffle an array in javaScript
}

checkCard(card: PlanetInterface){ //PlanetInterface | null
if(this.selectedCard){
  if(this.selectedCard.name === card.name){
    card.checked = true;
    this.selectedCard.checked = true;

    this.selectedCard.selected = false; //DA ERROR POR SER FALSO->cambio tipo en interface a any
    this.selectedCard = undefined; //para poder poner aqui null arriba poner || null
  }else{
    card.selected = true;
    setTimeout(() => {
        card.selected = false;
        this.selectedCard!.selected = false;
        this.selectedCard = undefined;
    }, 500)

  }
}else{
  this.selectedCard = card;
  card.selected = true;
}
}

}
