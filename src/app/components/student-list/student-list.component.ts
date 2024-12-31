import { Component,ViewChild } from '@angular/core';
import { student } from '../../../models/student';
import { NgTemplateOutlet } from '@angular/common';
 import {DetailsComponent} from  '../student-details/student-details.component'
import { HighlightCourseDirective } from '../../directives/highlight-course.directive';
import { IconPipePipe } from '../../../pipes/icon-pipe.pipe';
import { CoursesListComponent } from '../courses-list/courses-list.component';
@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [DetailsComponent,NgTemplateOutlet,HighlightCourseDirective,IconPipePipe,CoursesListComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  students:student[]=[ 
    new student(1,"hila basis","lando 4","0556735833",100,new Date("01/01/2024"),true , true),
    new student(2,"chana kohen","lando","05426418",48,new Date("04/11/2025"),false,true),
    new student(3,"dina levi","lando ","054788814",90,new Date("01/01/2024"),true , false)
     ]
    //  allCourses : courses [];
    //  constructor(private coursesService: CoursesService) { 
    //   this.allCourses = this.coursesService.getCourses();
    // }
     selectedid=0
     viewDetailsStudent(i:number){
       this.selectedid= i;
     }

     AddStudent(){
       this.selectedid=-1
     }
     
     ParentSave(stud: student){
       this.students.push(stud);
       
     }
   
}


