import { Component } from '@angular/core';
import { FetchWeatherService } from '../fetch-weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public data: any;
  constructor(private fetchWeatherSvc: FetchWeatherService) {
    
  }

  ionViewWillEnter(){
    const currentCity = this.fetchWeatherSvc.getCurrentCity();

    this.fetchWeatherSvc.searchWeatherPromise(currentCity)
      .then(data => {
        this.data = data;
      });
  }

}
