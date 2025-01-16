import { Component,Input,Output,EventEmitter,ViewChild } from '@angular/core';
import { InfromationPopupComponent } from '../infromation-popup/infromation-popup.component';
//  import { EventEmitter } from 'stream';
import { student } from '../../../models/student';
import { CoursesListComponent } from '../courses-list/courses-list.component';
@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [InfromationPopupComponent, CoursesListComponent],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class DetailsComponent {
// myVariable: student= new student(123457,'efrat','levi','rabi','0556789542',false,45,new Date('01/01/2024'))
// @Input () id:number=0;
// @Input() list:student[] = [];
// @Input () currentStudent: any;
// @Output() onSaveStudent : EventEmitter<any>= new EventEmitter<any>()
// saveStudent(Name:string, Address:string,Phone:string ,AvgMark:number,DepartureDate?:Date){
//   this.stud=new student(this.count,Name,Address,Phone,AvgMark,DepartureDate)
//   this.count=this.count+1;
//   this.saveStudent.emit(this.stud)}
// showDetails(){  
//     let index = this.currentStudent.findIndex(stu => stu.id==this.id);
//     return this.currentStudent
       
//   }
count=4
stud=new student(2,"","","",34);
@Input()currentStudent:any;
@Output() saveStudent: EventEmitter<any> = new EventEmitter<any>();
@ViewChild(InfromationPopupComponent) childDelete: InfromationPopupComponent= new InfromationPopupComponent;
flag=false
 saveChild(Name:string, Address:string,Phone:string ,AvgMark:number,DepartureDate?:Date)
{
  this.stud=new student(this.count,Name,Address,Phone,AvgMark,DepartureDate)
  this.count=this.count+1;
  this.saveStudent.emit(this.stud)
}
DeleteStudent(){  
  this.childDelete.ShowPopup('?האם אתה בטוח שברצונך למחוק תלמיד זה') 
  this.flag=true 
}
ClosePopup(){
  this.childDelete.ShowPopup('')
  this.flag= false
}
}
    
