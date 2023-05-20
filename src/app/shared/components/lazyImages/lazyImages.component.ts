import { Component, Input,OnInit } from '@angular/core';
import { timeout } from 'rxjs';


@Component({
  selector: 'app-lazyImages',
  templateUrl: './lazyImages.component.html',

})
export class LazyImagesComponent implements OnInit  {

  @Input()
  public url!:string;
  @Input()
  public alt: string = "";

  public hasLoader:boolean=false;

  constructor() { }

  ngOnInit(): void {
   if(!this.url)throw new Error("Url es requerido")
  }
  onLoader(){

     this.hasLoader = true


  }


}
