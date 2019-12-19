import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchWeatherService {

  private currentCity: string = "toulon";

  constructor() { }

  public getCurrentCity(){
    return this.currentCity;
  }

  public setCurrentCity(newCity){
    this.currentCity = newCity;
  }

  async searchWeatherPromise(city: string = 'toulon') {
    let url = "https://www.prevision-meteo.ch/services/json/" + city;

    return fetch(url)
    .then(res => res.json())
    .then(data => {
      //Table of results
      return data;
    })
  }

  async searchCitiesPromise() {

    let url = "https://cors-anywhere.herokuapp.com/https://www.prevision-meteo.ch/services/json/list-cities";

    return fetch(url)
    .then(res => res.json())
    .then(data => {
      // Transform Object into Array
      const citiesArray = new Array();

      Object.keys(data).forEach(key => {
        citiesArray.push(data[key]);
      });

      return citiesArray;
    })
  }

}
