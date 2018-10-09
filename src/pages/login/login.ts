import { Component, ViewChild } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController,ToastController  } from 'ionic-angular';
// import { AngularFireAuth } from '@angular/fire/auth';

import {HomePage} from '../home/home';
import { SelectStorePage } from '../select-store/select-store';

// @IonicPage({
//   name: 'loginPage'
// })

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('userName') userName;
  @ViewChild('password') password;

  // constructor(private fire:AngularFireAuth, private alertctrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private toastctrl: ToastController) {
  // }

  constructor(private alertctrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private toastctrl: ToastController) {
  }

  toast(message:string, value:boolean) {
    this.toastctrl.create({
      message: message,
      position: 'top',
      showCloseButton: value
    }).present();

  }

  // login() {
  //   this.fire.auth.signInWithEmailAndPassword(this.userName.value , this.password.value)
  //   .then( data => {
  //     console.log("got data");
  //     this.navCtrl.setRoot(SelectStorePage);
  //   })
  //   .catch( error => {
  //     console.log("got error", error)
  //     this.toast("Invalid Username or Password", true);
  //   })

  // }

  login(){
    this.navCtrl.setRoot(SelectStorePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}