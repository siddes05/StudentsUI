import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { AppRoutingModule } from './/app-routing.module';
import { StudentInfoService } from './student-info.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StudentInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
