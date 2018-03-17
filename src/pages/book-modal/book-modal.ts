import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-book-modal',
  templateUrl: 'book-modal.html',
})
export class BookModalPage {
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookModalPage');

    //let book = Epub("assets/books/moby-dick/");
  }
  closeModal() {
    this.navCtrl.pop();
  }
}
