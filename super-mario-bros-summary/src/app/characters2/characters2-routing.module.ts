import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Characters2Page } from './characters2.page';

const routes: Routes = [
  {
    path: '',
    component: Characters2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Characters2PageRoutingModule {}
