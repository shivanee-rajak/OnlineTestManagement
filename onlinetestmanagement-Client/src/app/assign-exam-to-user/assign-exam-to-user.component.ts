import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/Admin';
import { Exam } from '../model/exam';
import { User } from '../model/user';
import { OnlineTestManagement } from '../service/testService';

@Component({
  selector: 'assign-exam-to-user',
  templateUrl: './assign-exam-to-user.component.html',
  styleUrls: ['./assign-exam-to-user.component.css']
})
export class AssignExamToUserComponent  {

  
  constructor(private onlinetest: OnlineTestManagement) {
  }


  userId:number;
  examId:number;
  
  user:User=undefined;
  exam:Exam=undefined;
  admin:Admin=undefined;

  
   
assignExam(form:any){
  let data=form.value;
  this.userId = data.userId;
  this.examId = data.examId;
  
  
  let successFun = (adminArg: Admin) => {
    this.admin = adminArg;
  };

  let errFun = err => {
    console.log("err in addusercomponent " + err.message);
  }

  let observable: Observable<Admin> = this.onlinetest.getAssignExam(this.userId,this.examId);
  observable.subscribe(successFun, errFun);

}


}

  


