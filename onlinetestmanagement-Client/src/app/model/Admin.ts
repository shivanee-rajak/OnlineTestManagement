import { DatePipe } from '@angular/common';
import { Exam } from './exam';
import { User } from './user';

export class Admin{

  assignedId:number;   
  marks:number;
  status:boolean;
  examDate:DatePipe;
  user:User;
  exam:Exam;
	
  constructor(assignedId:number,marks:number,status:boolean,examDate:DatePipe,user:User,exam:Exam){
    this.assignedId=assignedId;
    this.marks=marks;
}

  getAssignId():number{
      return this.assignedId;

  }

  getStatus():boolean{
     return this.status;
  }
   
  
  getExamDate():DatePipe{
    return this.examDate;
 }


  getMarks():number{
    return this.marks;
  }
  
  getUser():User{
    return this.user; 
  }

  getExam():Exam{
    return this.exam; 
  }

        
}