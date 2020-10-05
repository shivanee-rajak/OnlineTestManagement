import { Component, OnInit } from '@angular/core';
import { Exam } from '../model/exam';
import { User } from '../model/user';

@Component({
  selector: 'assign-exam-to-user',
  templateUrl: './assign-exam-to-user.component.html',
  styleUrls: ['./assign-exam-to-user.component.css']
})
export class AssignExamToUserComponent  {

  userId:number;
  examId:number;
  
  user:User=undefined;
  exam:Exam=undefined;

  
   
assignExam(form:any){
  let data=form.value;
  let userId = data.userId;
  let examId = data.examId;
  
  this.user=new User(userId,"anu","123");
  this.exam=new Exam(examId,"@#!",30);
}
  

}
