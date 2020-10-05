import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Exam } from '../model/exam';
import { OnlineTestManagement } from '../service/testService';

@Component({
  selector: 'exam-details',
  templateUrl: './exam-details.component.html',
  styleUrls: ['./exam-details.component.css']
})
export class ExamDetailsComponent  {

  constructor(private route:ActivatedRoute, private onlinetest:OnlineTestManagement) {

    let observable =route.paramMap;//param map is the property in activated route
    observable.subscribe((params:ParamMap)=>{
     let idVal:string =params.get("id");
     let idNum:number=Number(idVal);//converting string to number
     console.log("id available is "+idNum);
     this.findExamById(idNum);
    })
    }
 
    exam:Exam=undefined;
 
 
    findExamById(id:number){
     let observable:Observable<Exam>=this.onlinetest.getExam(id);
     observable.subscribe(
       examArg=>{
         this.exam=examArg;
       },
 
       err=>{
         console.log("isnide exam details, err is "+err.message);
       }
 
     );
    }
 
   findExam(form:any){
     let data=form.value;
     let id=data.examid;
    this.findExamById(id);
   }

}
