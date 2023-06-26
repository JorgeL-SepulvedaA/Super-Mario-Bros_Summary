import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Characters2PageRoutingModule } from './characters2-routing.module';

import { Characters2Page } from './characters2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Characters2PageRoutingModule
  ],
  declarations: [Characters2Page]
})
export class Characters2PageModule {}
