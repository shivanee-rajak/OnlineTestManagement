import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Exam } from '../model/exam';
import { OnlineTestManagement } from '../service/testService';


@Component({
  selector: 'add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent  {

  constructor(private onlinetest: OnlineTestManagement) {
  }

  examId:number;
	examName:string;
  minutes:number;
  exam:Exam=undefined;
    
  addExam(form:any){
    let data=form.value;
    let examName=data.examName;
    let minutes=data.minutes;
   this.exam=new Exam(-1,examName,minutes);

   
   let successFun = (examArg: Exam) => {
    this.exam = examArg;
  };

  let errFun = err => {
    console.log("err in addusercomponent " + err.message);
  }

  let observable: Observable<Exam> = this.onlinetest.addExam(this.exam);
  observable.subscribe(successFun, errFun);

  

}


   
   
}


