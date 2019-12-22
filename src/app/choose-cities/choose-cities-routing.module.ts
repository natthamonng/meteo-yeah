import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseCitiesPage } from './choose-cities.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseCitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseCitiesPageRoutingModule {}
