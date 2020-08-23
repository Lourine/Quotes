import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quotes} from '../quotes'
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  clickCounter: number = 0;
  dislikeCounter: number = 0;

  @Input() quote: Quotes;
  @Output() isRead= new EventEmitter<boolean>();

      quoteDelete(complete:boolean){
   this.isRead.emit(complete);
 }
 

  constructor() { }

  ngOnInit() {}
  
  countClick() {
    this.clickCounter += 1;
  }
  countDislike() {
    this.dislikeCounter += 1;
  }
}