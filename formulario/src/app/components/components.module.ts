import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatosComponent } from '../components/datos/datos.component';



@NgModule({
  declarations: [DatosComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule 
  ],
  exports: [DatosComponent]
})
export class ComponentsModule { }
