import { Component, OnInit } from '@angular/core';
import { FetchWeatherService } from '../fetch-weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public data: any;

  constructor() {}

  ngOnInit(){
    
  }
}
