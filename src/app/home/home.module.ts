import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ForecastListComponent } from './forecast-list/forecast-list.component';
import { HourlyWeatherComponent } from './hourly-weather/hourly-weather.component';
import { TemperatureChartComponent } from './temperature-chart/temperature-chart.component';
import { PopoverSettingsComponent } from '../popover-settings/popover-settings.component';
import { FooterModule } from '../footer/footer.module';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    FooterModule
  ],
  entryComponents: [PopoverSettingsComponent],
  declarations: [HomePage, ForecastListComponent,HourlyWeatherComponent,TemperatureChartComponent, PopoverSettingsComponent]
})
export class HomePageModule {}
