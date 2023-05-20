import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs';

@Component({
  selector: 'app-cardList',
  templateUrl: './cardList.component.html',
  styleUrls: ['./cardList.component.css']
})
export class CardListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(!this.gif) throw new Error("Gif propery is require")
  }


  @Input()
  public gif!: Gif;

}
