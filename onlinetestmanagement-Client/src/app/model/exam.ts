export class Exam{
  examId:number;
	examName:string;
  minutes:number;
    

      constructor(examId:number,examName:string,minutes:number){
          this.examId=examId;
          this.examName=examName;
          this.minutes= minutes;
      }
  
      getName():string{
          return this.examName;
        }
      
        getTime():number{
          return this.minutes;
        }

    
      
  }