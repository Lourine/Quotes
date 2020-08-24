import { Component, OnInit, Output, EventEmitter } from'@angular/core';
import {Quotes} from '../quotes'
import { from } from 'rxjs';
@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  
  @Output() addQuote = new EventEmitter();
  quoteStr:string
    quotePublisher:string
    quoteAuthor:string
    theQuote:any
    quoteDate
    
      submitQuote(  ){
        this.theQuote= new Quotes(this.quoteStr,this.quoteAuthor,this.quotePublisher,this.quoteDate)
        this.quoteStr=''
        this.quoteAuthor=''
        this.quotePublisher=''
        this.quoteDate= new Date
        this.addQuote.emit(this.theQuote)
  }
  
  
    
  
  constructor() { }

  ngOnInit(): void {
  }

}
