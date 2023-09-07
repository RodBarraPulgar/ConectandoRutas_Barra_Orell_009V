import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
  
export class RegistroPage implements OnInit {

  usuario={
    nombre:'',
    password:'',
    rut:'',
    fecha_nacimiento:'',
    email:'',
    sede:'',
    tipo:'',
  }

  constructor(private menuController: MenuController,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async Registrar(){
    const alert = await this.alertController.create({
      header: 'Bienvenido!'+ ' '+ this.usuario.nombre,
      message: 'Usuario registrado exitosamente!',
      buttons: ['OK'],
    });

    await alert.present();
    this.usuario.nombre="";
    this.usuario.password="";
    this.usuario.rut="";
    this.usuario.fecha_nacimiento="";
    this.usuario.email="";
    this.usuario.sede="";
    this.usuario.tipo="";
  }

}
