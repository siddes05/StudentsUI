import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes =[

  { path: "student",
   component: StudentComponent},
 
   { path: "home",
   component: HomeComponent},
 
 ]

 @NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
