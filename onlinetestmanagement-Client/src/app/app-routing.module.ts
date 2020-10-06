import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExamComponent } from './add-exam/add-exam.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AssignExamToUserComponent } from './assign-exam-to-user/assign-exam-to-user.component';
import { EditAssignExamComponent } from './edit-assign-exam/edit-assign-exam.component';
import { ExamDetailsComponent } from './exam-details/exam-details.component';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ViewAssignExamComponent } from './view-assign-exam/view-assign-exam.component';

const routes: Routes = [

  {
    path:"app-home",
    component:HomeComponent
  },

{
  path:'',
  redirectTo :'app-home',
  pathMatch:'full'
},
 {
   path:'add-user',
   component:AddUserComponent
 },
 
 {
  path:'user-details',
  component:UserDetailsComponent
},
 
{
  path:'add-exam',
  component:AddExamComponent
},

{
  path:'exam-details',
  component:ExamDetailsComponent
},

{
  path:'assign-exam-to-user',
  component:AssignExamToUserComponent
},

{
  path:'view-assign-exam',
  component:ViewAssignExamComponent
},

{
  path:'edit-assign-exam',
  component:EditAssignExamComponent
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
