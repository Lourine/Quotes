import { Component, OnInit } from '@angular/core';
import{Quotes} from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote:Quotes[] = [
    new Quotes('Life is a journey','unknown','Millicent', new Date()),
    new Quotes('Do one thing everyday that scares you','Eleanor Roosevelt','Millicent',new Date()),
  ];
 

  toggleDetails(index){
    this.quote[index].showDetails = !this.quote[index].showDetails;
  }
  deleteQuote(isRead,index){
    if (isRead){
        let toDelete=confirm(`Are you sure you want to delete this quote?`)


        if(toDelete){
            this.quote.splice(index,1)
            alert(`Quote has been deleted`)
        }
    }

  }
  addNewQuote(quote){
    quote.publishDate = new Date(quote.publishDate)
    this.quote.push(quote)
  }
  

  
  constructor() { }

  ngOnInit(): void {
  }

}
