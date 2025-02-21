import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss'],
})
export class GameInfoComponent implements OnChanges {
  cardAction = [
    {
      title: 'Waterfall',
      description:
        'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.',
    },
    { title: 'You', description: 'You decide who drinks.' },
    { title: 'Me', description: 'Congrats! Drink a shot!' },
    {
      title: 'Category',
      description:
        'Come up with a category (e.g. Colors). Each player must enumerate one item from the category.',
    },
    {
      title: 'Bust a jive',
      description:
        'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one.',
    },
    { title: 'Chicks', description: 'All girls drink.' },
    {
      title: 'Heaven',
      description: 'Put your hands up! The last player drinks!',
    },
    {
      title: 'Mate',
      description:
        'Pick a mate. Your mate must always drink when you drink and the other way around.',
    },
    {
      title: 'Thumbmaster',
      description:
        'If you put your thumb on the table, everyone else must do the same. The last person to do so drinks.',
    },
    { title: 'Men', description: 'All men drink.' },
    { title: 'Quizmaster', description: 'You ask a question. Anyone who answers wrong drinks.' },
    {
      title: 'Never have I ever...',
      description:
        'Say something you have never done. Everyone who has done it has to drink.',
    },
    {
      title: 'Rule',
      description:
        'Make a rule. Everyone needs to drink when they break the rule.',
    },
  ];
  

  title: string = '';
  description: string = '';
  @Input() card!: string;
  isHidden = true;

  ngOnChanges(): void {

    let index = parseInt(this.card.replace(/\D/g, ''), 10);
    if (!isNaN(index) && index > 0 && index <= this.cardAction.length) {
      this.isHidden = false;
      this.title = this.cardAction[index - 1].title;
      this.description = this.cardAction[index - 1].description;
    }
  }
}
