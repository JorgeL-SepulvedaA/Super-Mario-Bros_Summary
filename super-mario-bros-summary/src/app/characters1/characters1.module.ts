import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Characters1PageRoutingModule } from './characters1-routing.module';

import { Characters1Page } from './characters1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Characters1PageRoutingModule
  ],
  declarations: [Characters1Page]
})
export class Characters1PageModule {}
