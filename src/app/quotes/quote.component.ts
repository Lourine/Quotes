import { Component, OnInit } from '@angular/core';
import{Quotes} from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote:Quotes[] = [
    new Quotes('Life is a journey','unknown','Millicent',0, new Date()),
    new Quotes('Do one thing everyday that scares you','Eleanor Roosevelt','Millicent',0 ,new Date()),
  ];
 

  toggleDetails(index){
    this.quote[index].showDetails = !this.quote[index].showDetails;
  }
  deleteQuote(index){
    alert(`You are about to delete ${this.quote[index].name}?`)
    this.quote.splice(index, 1);

  }
  addNewQuote(quote){
    quote.publishDate = new Date(quote.publishDate)
    this.quote.push(quote)
  }
 
  
  constructor() { }

  ngOnInit(): void {
  }

}
