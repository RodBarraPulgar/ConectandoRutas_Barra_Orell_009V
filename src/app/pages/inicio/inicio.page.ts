import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  usuario={
    nombre:'',
    password:''
  }



  constructor(private menuController: MenuController,
              private alertController: AlertController) { }
  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');

  }

  async iniciarSesion(){
    const alert = await this.alertController.create({
      header: 'Bienvenido, '+this.usuario.nombre+'!',
      message: 'Has iniciado Sesion Exitosamente',
      buttons: ['Ok'],
    });

    await alert.present();
    this.usuario.nombre='';
    this.usuario.password='';
  
  }

}
