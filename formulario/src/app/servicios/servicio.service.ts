import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  bnombre:string;
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
  date: Date;
  
  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  constructor(public alerta: AlertController) {}

  async addPerson(strNombre:string, strCorreo:string, intTelefono:BigInteger, strNotas:string){
  if(this.genero==='fem'){
    this.generos=false;
  }else if(this.genero==='mas'){
     this.generos= true;
  }

  this.strMessage = "";    
  this.blnNext = false;
    (this.bnombre)? this.fnError : this.fnError('Error: Error favor de llenar el campo nombre.');
    (this.bcorreo)? (this.regexp.test(this.bcorreo))? this.fnError : this.fnError('Error: Error Correo no valido.') : this.fnError('Error: Error favor de llenar el campo Correo.');
    (this.btelefono)? this.fnError : this.fnError('Error: Error favor de llenar el campo Telefono.');

    
    
   if(!this.blnNext){
    const jsnPersona: any = {
      Nombre:this.bnombre,
      Correo:this.bcorreo,
      Telefono:this.btelefono,
      Notas:this.bnotas,
      fecha:this.date,
      genero:this.generos
    }
    const alert = await this.alerta.create({
      header: 'Exito',
      message:'ha sido agregado' ,
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
  }
}


