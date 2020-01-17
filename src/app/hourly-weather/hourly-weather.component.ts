import { Component, OnInit, Input } from '@angular/core';
import { IWeatherData, IForecastDayData, IHourlyData } from '../WeatherData';

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.scss'],
})
export class HourlyWeatherComponent implements OnInit {
  public currentTime = new Date().getHours() + "H00"

  @Input()
  public data: IWeatherData;

  constructor() {}

  ngOnInit() {}

  public getHourlyData(): IHourlyData {
    return this.data.fcst_day_0.hourly_data[this.currentTime];
  }

  public getNext24Hrs() {
    const currentHour = new Date().getHours();

    const hoursData = [];

    Object.keys(this.data.fcst_day_0).map(hourKey => {
      // Extract hour as a number
      const hourNum = Number(hourKey.split('H')[0]);
      if(hourNum >= currentHour){
        hoursData.push({
          ...this.data.fcst_day_0[hourKey],
          hourKey,
          hourNum,
          dayShort: this.data.fcst_day_0.day_short
        });
      }
    })

    Object.keys(this.data.fcst_day_1).map(hourKey => {
      if(hoursData.length < 24){
        // Extract hour as a number
        const hourNum = Number(hourKey.split('H')[0]);

        hoursData.push({
          ...this.data.fcst_day_1[hourKey],
          hourKey,
          hourNum,
          dayShort: this.data.fcst_day_1.day_short
        });
      }
    });
    console.log(hoursData);

    return hoursData;
  }

}
