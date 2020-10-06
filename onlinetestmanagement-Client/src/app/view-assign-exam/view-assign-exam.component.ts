import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from '../model/Admin';
import { OnlineTestManagement } from '../service/testService';

@Component({
  selector: 'view-assign-exam',
  templateUrl: './view-assign-exam.component.html',
  styleUrls: ['./view-assign-exam.component.css']
})
export class ViewAssignExamComponent {

  constructor(private route:ActivatedRoute, private onlinetest:OnlineTestManagement) {

    let observable =route.paramMap;//param map is the property in activated route
    observable.subscribe((params:ParamMap)=>{
     let idVal:string =params.get("id");
     let idNum:number=Number(idVal);//converting string to number
     console.log("id available is "+idNum);
     this.findExamById(idNum);
    })
    }
 
    admin:Admin;
 
 
    findExamById(id:number){
      console.log(id+ " 2");
     let observable:Observable<Admin>=this.onlinetest.viewAssignExam(id);
     observable.subscribe(
       userArg=>{
         this.admin=userArg;
       },
 
       err=>{
         console.log("isnide user details, err is "+err.message);
       }
 
     );
    }
 
    findAssignedExam(form:any){
     let data=form.value;
     let id=data.id;
     console.log(id+ " 1");
    this.findExamById(id);
   }
 
}
