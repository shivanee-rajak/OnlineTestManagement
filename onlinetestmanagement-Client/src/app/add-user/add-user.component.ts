import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { OnlineTestManagement } from '../service/testService';



@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent  {


  constructor(private onlinetest: OnlineTestManagement) {
  }


  userId:number;
  userName:string;
  password:string;
  
  user:User=undefined;

addUser(form:any){
  let data=form.value;
  let username = data.username;
  let password = data.password;
  this.user = new User(-1,username,password);

  let successFun = (userArg: User) => {
    this.user = userArg;
  };

  let errFun = err => {
    console.log("err in addusercomponent " + err.message);
  }

  let observable: Observable<User> = this.onlinetest.addUser(this.user);
  observable.subscribe(successFun, errFun);

  

}


}
