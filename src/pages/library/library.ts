import { Component, OnInit } from '@angular/core';
import { Quote } from "../../data/quote.interface";
import quotes from "../../data/quote";




@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit{

quouteCollection: { category: string, quotes: Quote[], icon: string}[];
ngOnInit(){
  this.quouteCollection = quotes;
}

}
