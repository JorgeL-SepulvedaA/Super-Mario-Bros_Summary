import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Characters3PageRoutingModule } from './characters3-routing.module';

import { Characters3Page } from './characters3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Characters3PageRoutingModule
  ],
  declarations: [Characters3Page]
})
export class Characters3PageModule {}
