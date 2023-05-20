import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-serch-box',
  templateUrl: './serch-box.component.html',

})
export class SerchBoxComponent {


  @ViewChild("txtTagInput")
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(
    private gifsService: GifsService
  )
  { }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value
    this.gifsService.serchTag(newTag)

    this.tagInput.nativeElement.value = "";
  }

}

