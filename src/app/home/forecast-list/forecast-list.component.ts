import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.scss'],
})
export class ForecastListComponent implements OnInit {

  public dayNumbers = [1, 2, 3, 4];

  @Input()
  public data;

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

  public getDayData(dayNumber){
    return this.data['fcst_day_'+dayNumber];
  }

}
