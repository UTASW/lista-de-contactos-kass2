import { Component, OnInit } from '@angular/core';
import { ServicioService} from '../../servicios/servicio.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss'],
})
export class DatosComponent implements OnInit {

  constructor(public servicios:ServicioService) { }

  ngOnInit() {
    this.servicios.arrPersonas;
  }

}
