import { Injectable } from '@angular/core';
import { courses, Subject } from '../models/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

 private courses = [
  new courses(12 , "programming" , Subject.SoftwareEngineering),
  new courses(13 , "math" , Subject.Accounting),
  new courses(14 , "asd" , Subject.Graphics)

 ];

  getCourses(){
    return this.courses;
  }
  constructor() { }
}
