import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-settings',
  templateUrl: './popover-settings.component.html',
  styleUrls: ['./popover-settings.component.scss'],
})
export class PopoverSettingsComponent implements OnInit {
  constructor(private popoverController: PopoverController) {}

    ngOnInit() {}

    closePopover() {
        this.popoverController.dismiss();
    }

}


