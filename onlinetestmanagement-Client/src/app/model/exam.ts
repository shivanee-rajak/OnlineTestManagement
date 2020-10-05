export class Exam{
  examId:number;
	examName:string;
  Time:number;
    

      constructor(examId:number,examName:string,Time:number){
          this.examId=examId;
          this.examName=examName;
          this.Time= Time;
      }
  
      getName():string{
          return this.examName;
        }
      
        getTime():number{
          return this.Time;
        }

    
      
  }