import { NgModule } from '@angular/core';
import { SharedComponent } from './components/shared.component';
import { CommonModule } from '@angular/common';
import { LazyImagesComponent } from './components/lazyImages/lazyImages.component';


@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [
    SharedComponent,
    LazyImagesComponent
  ],
  exports: [
    SharedComponent,
    LazyImagesComponent
  ]
})
export class SharedModule { }
