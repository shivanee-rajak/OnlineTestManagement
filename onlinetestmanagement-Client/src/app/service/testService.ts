import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../model/user';
import { from, observable, Observable } from 'rxjs';
import { Exam } from '../model/exam';
import { Admin } from '../model/Admin';


@Injectable()
export class OnlineTestManagement{

    baseUrl="http://localhost:8080/onlineTestManagement";

    constructor(private http:HttpClient){

    }

    addUser(user:User):Observable<User>{
     let url=this.baseUrl+"/user/addUser";   
     let observable:Observable<User>=this.http.post<User>(url,user);
     return observable;
    }


    getUser(id:number):Observable<User>{
        let url=this.baseUrl+"/user/getUser/"+id;
        let observable:Observable<User>=this.http.get<User>(url);
        return observable;
    }

    addExam(exam:Exam):Observable<Exam>{
        let url=this.baseUrl+"/exam/addExam";   
        let observable:Observable<Exam>=this.http.post<Exam>(url,exam);
        return observable;
       }

       getExam(id:number):Observable<Exam>{
        let url=this.baseUrl+"/exam/getExam/"+id;   
        let observable:Observable<Exam>=this.http.get<Exam>(url);
        return observable;
       }
    
       getAssignExam(userid:number,examid:number):Observable<Admin>{
        let url=this.baseUrl+"/admin/assignExam/"+userid+"/"+examid;   
        let observable:Observable<Admin>=this.http.post<Admin>(url," ");
        return observable;
       }
       
       editAssignExam(admin:Admin):Observable<Admin>{
           //console.log(admin.exam.examId);
        let url=this.baseUrl+"/admin/editAssignedExam/"+admin.exam.examId;   
        let observable:Observable<Admin>=this.http.put<Admin>(url,admin);
        return observable;
       }

       viewAssignExam(assignExamId:number):Observable<Admin>{
        console.log(assignExamId+ " 3");
        let url=this.baseUrl+"/admin/viewAssignedExamById/"+assignExamId;  
        console.log(url); 
        let observable:Observable<Admin>=this.http.get<Admin>(url,);
        console.log(observable);
        return observable;
       }
     
    

      
     
   


}