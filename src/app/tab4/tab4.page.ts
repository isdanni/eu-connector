import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor(private route: Router, private alertController: AlertController) { }

  nextpage() {
    this.route.navigate(['/home']);
  }

  public alertButtons = ['OK'];


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'EU-Connector',
      subHeader: 'Thanks for using our app!❤️',
      message: 'EU-Connector is a non-profit organization(NGO) that provides free, collaborative resources 24/7 to help immigrants, asylum seekers and refugees thrive in the E.U',
      buttons: ['OK'],
    });

    await alert.present();
  }
  
  public alertButtons2 = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Name',
    },
    {
      type: "tel",
      placeholder: 'Contact Number',
    },
    {
      type: "email",
      placeholder: 'Email',
    },
    {
      type: "textarea",
      placeholder: 'Resource types',
    },
    {
      type: 'number',
      placeholder: 'Country',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'Additional info',
    },
  ];


}
