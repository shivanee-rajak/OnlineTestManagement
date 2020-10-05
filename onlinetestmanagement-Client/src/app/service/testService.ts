import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../model/user';
import { from, observable, Observable } from 'rxjs';
import { Exam } from '../model/exam';


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

       getAssignExam(userId:number,examId:number):Observable<User>{
        let url=this.baseUrl+"/exam/addExam"+userId+"/"+examId;   
        let observable:Observable<User,Exam>=this.http.post<User,Exam>(url);
        return observable;
       }


      
     
   


}