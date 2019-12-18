import { Component } from '@angular/core';
import { FetchWeatherService } from '../fetch-weather.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage {

  // List of all available cities
  public allCities: Array<Object> = [];

  // Filtered cities for display
  public cities: Array<Object> = [];

  constructor(
    private fetchSvc: FetchWeatherService
  ) { 
    this.fetchSvc.searchCitiesPromise()
      .then(data => {
        this.allCities = data;
    });
  }

  getSearchTerm(searchEvent: CustomEvent){
    return searchEvent.detail.value;
  }

  doSearch(searchEvent: CustomEvent){
    const searchTerm: string = this.getSearchTerm(searchEvent);
    // Filter allCities wrt searchTerm and store results in cities
    this.cities = this.allCities.filter((city: any) => {
      return (city.name.toLowerCase().startsWith(searchTerm.toLowerCase()) == true)
    });

    console.log(this.cities);
  }
  

}
