import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs';

@Component({
  selector: 'app-Card',
  templateUrl: './Card.component.html',
  styleUrls: ['./Card.component.css']
})
export class CardComponent {
  @Input()
  public gifs: Gif[] = []

}
