import { Component } from '@angular/core';
import { FetchWeatherService } from '../fetch-weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-cities',
  templateUrl: './choose-cities.page.html',
  styleUrls: ['./choose-cities.page.scss'],
})
export class ChooseCitiesPage {

  // List of all available cities
  public allCities: Array<Object> = [];

  // Filtered cities for display
  public cities: Array<Object> = [];

  public bDidSearch: boolean = false;

  constructor(
    private fetchCitiesSvc: FetchWeatherService,
    private router: Router
  ) { 
    this.fetchCitiesSvc.searchCitiesPromise()
      .then(data => {
        this.allCities = data;
    });
  }

  getSearchTerm(searchEvent: CustomEvent){
    return searchEvent.detail.value;
  }

  doSearch(searchEvent: CustomEvent){
    this.bDidSearch = true;

    const searchTerm: string = this.getSearchTerm(searchEvent);
    if (searchTerm.length < 3) {
      this.cities = [];
      return;
    } 

    // Filter allCities with searchTerm and store results in cities
    this.cities = this.allCities.filter((city: any) => {
      return (city.name.toLowerCase().startsWith(searchTerm.toLowerCase()) == true)
    });
    console.log(this.cities);
  }
  
  getDisplayMessage(){
    if (this.bDidSearch == true) {
      return "Aucun résultat ne correspond à votre recherche";
    } else {
      return;
    }
  }

  getCity(newCity){
    console.log(newCity);
    this.fetchCitiesSvc.setCurrentCity(newCity.url);
    this.router.navigateByUrl("/home");
  }
  
}
