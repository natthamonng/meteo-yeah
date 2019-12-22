import { Component} from '@angular/core';
import { FetchWeatherService } from '../fetch-weather.service';
import { PopoverController} from '@ionic/angular';
import { PopoverSettingsComponent } from '../popover-settings/popover-settings.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public data: any;
  constructor(
    private fetchWeatherSvc: FetchWeatherService,
    public popoverController: PopoverController
    ) {}

  ionViewWillEnter(){
    const currentCity = this.fetchWeatherSvc.getCurrentCity();

    this.fetchWeatherSvc.searchWeatherPromise(currentCity)
      .then(data => {
        this.data = data;
      });
  }

  async presentPopover(ev: any){
    const popover = await this.popoverController.create({
      component: PopoverSettingsComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
