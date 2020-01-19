import { Injectable } from '@angular/core';
import { IWeatherData } from './WeatherData';

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

  async searchWeatherPromise(city: string = 'toulon'): Promise<IWeatherData> {
    let url = "https://www.prevision-meteo.ch/services/json/" + city;

    return fetch(url)
    .then(res => res.json())
    .then(data => {
      //Table of results
      return data;
    })
    .catch(err => console.error(err))
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
