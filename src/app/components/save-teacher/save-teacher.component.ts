import { Component,Input } from '@angular/core';
import { Teachers } from '../../../models/Teachers';
import { TeacherServiceService } from '../../../services/teacher-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-save-teacher',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './save-teacher.component.html',
  styleUrl: './save-teacher.component.css'
})
 

export class SaveTeacherComponent {
public teachers:Teachers[] = [] ;
public static ID=4;
// public teacher:Teachers=new Teachers(SaveTeacherComponent.ID++,"",[]);
public teacher:Teachers= new Teachers(0,"",[])
//  @Input() teacher!: Teachers;


constructor(private teacherService : TeacherServiceService){
  this.teachers = this.teacherService.getTeachers();
} 
onSave(){
 if(this.teachers.find(t=>t.id==this.teacher.id )){
  console.log("update");
   // the teacher didnt find
  this.teacherService.updateTeachers(this.teacher);
 }
  else{
    console.log("added");
    
  this.teacherService.addTeachers(this.teacher)
 }
 this.teachers = this.teacherService.getTeachers();
}
}
