import { Component, OnInit } from '@angular/core';
import { Game } from 'src/modules/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string = '';
  game!: Game;

  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      const card = this.game.stack.pop();
      if (card !== undefined) {
        this.currentCard = card;        
        this.pickCardAnimation = true;

        setTimeout(() => {
          this.game.playedCards.push(this.currentCard);
          this.pickCardAnimation = false;
        }, 1000);
      } else {
        console.log('No more cards to take.');
      }
    }
  }
}
