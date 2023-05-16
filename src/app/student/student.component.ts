import { Component, OnInit } from '@angular/core';
import { StudentInfoService } from '../student-info.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentServices : StudentInfoService) { }

  studentDetails : any[];

  ngOnInit() {

    this.studentServices.getStudentsDetails().subscribe(
  
      (data) => {
    
        this.studentDetails = data;
     })
    

  }

}
