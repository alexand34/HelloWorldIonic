import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'index',
  templateUrl: 'index.html'
})

export class IndexPage {
  constructor(private modalCtrl: ModalController) {  
  }

  openBook() {
    let modal = this.modalCtrl.create('BookModalPage');
    modal.present();
  }
}

