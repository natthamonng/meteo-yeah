import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseCitiesPageRoutingModule } from './choose-cities-routing.module';

import { ChooseCitiesPage } from './choose-cities.page';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseCitiesPageRoutingModule,
    FooterModule
  ],
  declarations: [ChooseCitiesPage]
})
export class ChooseCitiesPageModule {}
