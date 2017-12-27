import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, ToastController, NavParams, Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private navParams: NavParams,
    private events: Events
  ) {

  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad HomePage');
  }
  ionViewWillEnter() {
    // console.log('ionViewWillEnter HomePage');
  }
  ionViewDidEnter() {
    // console.log('ionViewDidEnter HomePage');
  }
  ionViewWillLeave() {
    // console.log('ionViewWillLeave HomePage');
  }
  ionViewDidLeave() {
    // console.log('ionViewDidLeave HomePage');
  }

  private _presentSignupAlert() {
    let alert = this.alertCtrl.create({
      title: 'Stay Informed',
      subTitle: "Please send us an email at lambdatown@yahoo.com if you'd like to be notified of our progress.",
      buttons: ['Sounds Good!']
    });
    alert.present();
  }
  openSignupPage() {
    console.log("Button clicked: openSignupPage() event = " + event);
    this._presentSignupAlert();
  }

}
