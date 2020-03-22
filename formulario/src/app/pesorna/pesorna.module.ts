import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesornaPageRoutingModule } from './pesorna-routing.module';

import { PesornaPage } from './pesorna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesornaPageRoutingModule
  ],
  declarations: [PesornaPage]
})
export class PesornaPageModule {}
