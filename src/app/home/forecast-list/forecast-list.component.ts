import { Component, OnInit, Input } from '@angular/core';
import { IWeatherData, IForecastDayData } from '../../WeatherData';

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.scss'],
})
export class ForecastListComponent implements OnInit {

  public dayNumbers = [1, 2, 3, 4];

  @Input()
  public data: IWeatherData;

  // public _data;

  // @Input()
  // public set data(newValue){
  //   this._data =  [
  //     newValue.fcst_day_0,
  //     newValue.fcst_day_1,
  //     newValue.fcst_day_2,
  //     newValue.fcst_day_3,
  //   ];
  // };

  constructor() { }

  ngOnInit() {}

  public getDayData(dayNumber: number):IForecastDayData {
    return this.data[`fcst_day_${dayNumber}`];
  }

}
