import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ForecastListComponent } from './forecast-list/forecast-list.component';
import { PopoverSettingsComponent } from '../popover-settings/popover-settings.component';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    FooterModule
  ],
  entryComponents: [PopoverSettingsComponent],
  declarations: [HomePage, ForecastListComponent, PopoverSettingsComponent]
})
export class HomePageModule {}
