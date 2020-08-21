import { Component, OnInit } from '@angular/core';
import{Quotes} from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote:Quotes[] = [
    new Quotes('Life is a journey','unknown','Millicent',0),
    new Quotes('Do one thing everyday that scares you','Eleanor Roosevelt','Millicent',0),
  ];
  toggleDetails(index){
    this.quote[index].showDetails = !this.quote[index].showDetails;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
