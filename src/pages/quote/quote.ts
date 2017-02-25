import { Component } from '@angular/core';
import {  NavParams , ViewController} from 'ionic-angular';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {

  constructor( public navParams: NavParams, private viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
  }
  onClose(){
    this.viewCtrl.dismiss();
  }

}
