import { Component, OnInit } from '@angular/core';
import { NavParams} from 'ionic-angular';
import { Quote } from "../../data/quote.interface";
import quotes from "../../data/quote";
import { QuotesPage } from "../quotes/quotes";




@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit{

quoteCollection: { category: string, quotes: Quote[], icon: string}[];

quotesPage = QuotesPage;

constructor ( public navParams: NavParams){}
ngOnInit(){
  this.quoteCollection = quotes;
}

}
