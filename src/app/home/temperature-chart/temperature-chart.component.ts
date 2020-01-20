import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { IWeatherData  } from '../../WeatherData';

@Component({
  selector: 'app-temperature-chart',
  templateUrl: './temperature-chart.component.html',
  styleUrls: ['./temperature-chart.component.scss'],
})

export class TemperatureChartComponent implements OnInit {
  @Input()
  public data : IWeatherData;

  public hoursData: Array<string> = ['0H00', '3H00', '6H00', '9H00', '12H00', '15H00','18H00', '21H00'];
  // public tempsData = this.getChartData();
  
  public lineChartData: ChartDataSets[] = [];

  public lineChartLabels: Label[] = this.hoursData;
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [{}]
    },
  };
  public lineChartColors: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor() { }

  ngOnInit() {
    this.lineChartData = [{ data: [...this.getChartData()], label: 'Aujourd\'hui' }];
  }

  public getChartData(): any[] {
    return this.hoursData.map( hour => {
      return this.data.fcst_day_0.hourly_data[hour].TMP2m;
    });
  }

}