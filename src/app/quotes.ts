export class Quotes {
  showDetails: boolean;
  downVotes:number;
  public votes:number;
  constructor(public name: string, public author:string, public submittedBy:string, public publishDate: Date){
    this.showDetails= false;
    this.votes=0;
    this.downVotes=0;
    }
  
  
}

