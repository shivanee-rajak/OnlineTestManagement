import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/Admin';
import { Exam } from '../model/exam';
import { User } from '../model/user';
import { OnlineTestManagement } from '../service/testService';

@Component({
  selector: 'edit-assign-exam',
  templateUrl: './edit-assign-exam.component.html',
  styleUrls: ['./edit-assign-exam.component.css']
})
export class EditAssignExamComponent {

  constructor(private onlinetest: OnlineTestManagement) {
  }


  userId:number;
  examId:number;
  marks:number;
  assignId:number;

  user:User=undefined;
  exam:Exam=undefined;
  admin:Admin=undefined;

  
   
editExam(form:any){
  let data=form.value;
  this.userId = data.userId;
  this.examId = data.examId;
  this.marks = data.marks;
  this.assignId = data.assignId;

  
  this.user = new User(this.userId,null,null);
  this.exam = new Exam(this.examId,null,null);
  this.admin = new Admin(this.assignId,this.marks,null,null,this.user,this.exam);

  let successFun = (adminArg: Admin) => {
    this.admin = adminArg;
  };

  let errFun = err => {
    console.log("err in addusercomponent " + err.message);
  }

  let observable: Observable<Admin> = this.onlinetest.editAssignExam(this.admin);
  observable.subscribe(successFun, errFun);

}


}
