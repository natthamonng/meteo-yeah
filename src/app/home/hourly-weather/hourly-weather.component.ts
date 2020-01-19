import { Component, OnInit, Input } from '@angular/core';
import { IWeatherData  } from '../../WeatherData';

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.scss'],
})
export class HourlyWeatherComponent implements OnInit {
  @Input()
  public data : IWeatherData;

  constructor() {}

  ngOnInit() {}

  public getHourlyData() {
    return this.getNext24Hrs().forEach( (hourData) => {
      console.log(this.data[`fcst_day_${hourData.day}`])
    })
  }
  
  public getNext24Hrs(): any[] {
    const currentHour = new Date().getHours();

    const hoursData : Array<Object> = [];

    Object.keys(this.data.fcst_day_0.hourly_data).map(hourKey => {
      // Extract hour as a number
      const hourNumber : number = Number(hourKey.split('H')[0]);
      if(hourNumber >= currentHour){
        hoursData.push({
          ...this.data.fcst_day_0[hourKey],
          day: 0,
          hourKey,
          hourNumber,
          dayShort: this.data.fcst_day_0.day_short,
          icon: this.data.fcst_day_0.hourly_data[hourKey].ICON,
          temp: this.data.fcst_day_0.hourly_data["0H00"].TMP2m
        });
      }
    })

    Object.keys(this.data.fcst_day_1.hourly_data).map(hourKey => {
      if(hoursData.length < 24){
        // Extract hour as a number
        const hourNumber : number = Number(hourKey.split('H')[0]);

        hoursData.push({
          ...this.data.fcst_day_1[hourKey],
          day: 1,
          hourKey,
          hourNumber,
          dayShort: this.data.fcst_day_1.day_short,
          icon: this.data.fcst_day_1.hourly_data[hourKey].ICON,
          temp: this.data.fcst_day_1.hourly_data["0H00"].TMP2m
        });
      }
    });

    console.log(hoursData);
    
    return hoursData;
  }

  slideOpts = {
    slidesPerView: 10,
    freeMode: false,
    scrollbar: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    }
  }
  
}
