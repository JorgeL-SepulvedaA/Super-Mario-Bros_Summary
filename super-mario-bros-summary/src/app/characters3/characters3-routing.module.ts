import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Characters3Page } from './characters3.page';

const routes: Routes = [
  {
    path: '',
    component: Characters3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Characters3PageRoutingModule {}
