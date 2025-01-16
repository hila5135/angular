import { Component } from '@angular/core';
import { courses } from '../../../models/courses';
import { CoursesService } from '../../../services/courses.service';
import { CommonModule } from '@angular/common';
import { HighlightCourseDirective } from '../../directives/highlight-course.directive';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CommonModule, HighlightCourseDirective],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css',
  providers: [ CoursesService]
})
export class CoursesListComponent {

  allCourses : courses [];

  constructor(private coursesService: CoursesService) { 
   this.allCourses = this.coursesService.getCourses();
 }
}
