import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})

export class RecuperarPage implements OnInit {

  usuario={
    email:'',
  }

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async recuperarContrasenha(){
    const alert = await this.alertController.create({
      header: '¡Éxito! Hemos enviado un correo electrónico a tu dirección registrada.',
      message: 'Abre tu bandeja de entrada y sigue las instrucciones para cambiar tu contraseña.',
      buttons: ['OK'],
    });

    await alert.present();
    this.usuario.email='';
  }

}
