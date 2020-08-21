import { Component, OnInit } from '@angular/core';
import{Quotes} from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote:Quotes[] = [
    {name:'Life is a journey', author:'unknown',submittedBy:'Millicent',votes:0},
    {name:'Do one thing everyday that scares you', author:'Eleanor Roosevelt',submittedBy:'Millicent',votes:0},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
