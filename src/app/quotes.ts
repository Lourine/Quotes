export class Quotes {
  showDetails: boolean;
  constructor(public name: string, public author:string, public submittedBy:string,public votes:number){
    this.showDetails= false;
    }
  
  
}

