import { Injectable } from '@angular/core';
import { Teachers } from '../models/Teachers';

@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {
  private teachersList = [
    new Teachers(1 ,"lerner",["ח7","ו4","ה6"]),
   new Teachers(2,"kohen",["ד4"]),
   new Teachers(3,"levi",["א1","ב2","ג3"])
  
   ];
getTeachers(){
  return this.teachersList;
}
updateTeachers(t:Teachers){
  let index = this.teachersList.findIndex(t1=>t1.id==t.id)
  if(index != -1)
     {
      this.teachersList[index].name=t.name;
      this.teachersList[index].classes=t.classes;  
     }
}
addTeachers(t:Teachers){
  if(t!= null){
  this.teachersList.push(t);
  }
}
deleteTeachers(t:Teachers){
 this.teachersList = this.teachersList.filter(t1=>t1.id != t.id)
}
  // constructor() { }
}
