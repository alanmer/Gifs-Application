import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent {

  constructor(private gitService: GifsService) { }

  get tags():string[] {
    return this.gitService.tagsHistory
  }
  serchTag(tag:string):void{
    this.gitService.serchTag(tag)
  }

}
