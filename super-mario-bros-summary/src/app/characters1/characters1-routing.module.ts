import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Characters1Page } from './characters1.page';

const routes: Routes = [
  {
    path: '',
    component: Characters1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Characters1PageRoutingModule {}
