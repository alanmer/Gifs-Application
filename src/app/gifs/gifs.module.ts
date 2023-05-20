import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { GifsComponent } from './components/gifs.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { SerchBoxComponent } from './components/serch-box/serch-box.component';
import { CardComponent } from './pages/card/Card.component';
import { CardListComponent } from './components/cardList/cardList.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    GifsComponent,
    HomePageComponent,
    SerchBoxComponent,
    CardComponent,
    CardListComponent,

  ],
  exports: [
    HomePageComponent,

  ]
})
export class GifsModule { }
