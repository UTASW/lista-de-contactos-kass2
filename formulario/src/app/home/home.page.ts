import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ServicioService} from '../servicios/servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /*bnombre:string;
  bcorreo:string;
  btelefono:string;
  bnotas:string;

  generos:boolean;
  genero:string;

  strMessage: string;
  shownotes= false;
  arrPersonas:Array<any> = [] as Array<JSON>;
  mostrarDiv:boolean;
  mostrarDivd:boolean;
  blnNext: boolean;
  
  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
*/
  constructor(public alerta: AlertController, public servicios: ServicioService) {}

 /* async addPerson(strNombre:string, strCorreo:string, intTelefono:BigInteger, strNotas:string){
  if(this.genero==='fem'){
    this.generos=false;
  }else if(this.genero==='mas'){
     this.generos= true;
  }

  this.strMessage = "";    
  this.blnNext = false;
    (strNombre)? this.fnError : this.fnError('Error: Error favor de llenar el campo nombre.');
    (strCorreo)? (this.regexp.test(strCorreo))? this.fnError : this.fnError('Error: Error Correo no valido.') : this.fnError('Error: Error favor de llenar el campo Correo.');
    (intTelefono)? this.fnError : this.fnError('Error: Error favor de llenar el campo Telefono.');

    let sexo = this.generos;
    this.bnombre='';
    this.bcorreo='';
    this.btelefono='';
    this.bnotas='';
    
   if(!this.blnNext){
    const jsnPersona: any = {
      strNombre,
      strCorreo,
      intTelefono,
      strNotas,
      sexo
    }
    const alert = await this.alerta.create({
      header: 'Exito',
      message:jsnPersona.strNombre += '  ha sido agrgado' ,
      buttons: ['OK']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);

    this.arrPersonas.push(jsnPersona);
    console.log(this.arrPersonas);
  } else{
    this.presentAlert();
  }
  }
  color(){
    this.mostrarDiv= !this.mostrarDiv;
    }
    
    colord(){
      this.mostrarDivd= !this.mostrarDivd;
      }

  async presentAlert() {
    const alert = await this.alerta.create({
      header: 'Errores',
      message:this.strMessage,
      buttons: ['OK']
    });

    await alert.present();
  }


  fnError(msg?: string){
    if(msg){
    //alert(msg);
    this.strMessage += msg +'<br>';
    this.blnNext= true;
    }else if(this.blnNext){
      this.blnNext= true;
    }else{
      this.blnNext= false;
    }

  }
  async eliminar(item) {
    const alert = await this.alerta.create({
      message: 'Seguro que desea eliminarlo?.',
      buttons: [
        {
        text:'Cancelar',
        role: 'cancel'
        },
        {
          text:'Aceptar',
           handler:()=>{
             let i = this.arrPersonas.indexOf(item);
             this.arrPersonas.splice(i,1);
           }
        }
      ]
    });

 alert.present();
  }*/
}
