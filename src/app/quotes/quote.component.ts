import { Component, OnInit } from '@angular/core';
import{Quotes} from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  votes: number = 0;
  clickCounter=0;
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
  upVote(i){
    this.quote[i].votes+=1
  }
  downVote(i){
  this.quote[i].downVotes+=1
  }
  addNewQuote(quote){
    quote.publishDate = new Date(quote.publishDate)
    this.quote.push(quote)
  
  }
  preNum:number
  lastNum:number
  counter:number

  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quote.length; this.counter++) {
      this.lastNum = this.quote[this.counter].votes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
