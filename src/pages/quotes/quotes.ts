import { Component, OnInit } from '@angular/core';
import { QuotesService} from "../../services/quotes";
import {  NavParams, AlertController } from 'ionic-angular';
import { Quote } from "../../data/quote.interface";


@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit{

  quoteGroup: { category: string, quotes: Quote[], icon: string}[];
  constructor( public navParams: NavParams, private alertCtrl: AlertController, private quoteService: QuotesService) {}

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }
  addToFavorites(quote: Quote ){
    const alert = this.alertCtrl.create({
      title: "Add Quote",
      subTitle: "Are you sure?",
      message: "This quote will be deleted",
      buttons: [{
        text: 'Yes, Go Ahead',
        handler: () => {
          this.quoteService.addQuoteToFavorites(quote);
        }

      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('cancelled');
        } 
      }]

    });

    alert.present();
  }

  removeFromFavorites(quote: Quote){
  this.quoteService.removeQuoteFromFavorites(quote);

  }

  isFavorite(quote: Quote){
    this.quoteService.isFavoriteQuote(quote);
  }

}
