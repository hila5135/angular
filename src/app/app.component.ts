import { Component } from '@angular/core';
import { RouterOutlet,RouterLink, RouterLinkActive } from '@angular/router';
import { StudentListComponent } from "./components/student-list/student-list.component";
import { SaveTeacherComponent } from "./components/save-teacher/save-teacher.component";
import { CommonModule } from '@angular/common';
// import { StudentDetailsComponent} from "./components/student-details/student-details.component"
import { MenuComponent } from "./components/menu/menu.component"; 
import { TimeComponent } from './components/time/time.component';
import { ReactiveFormClassesComponent } from './components/reactive-form-classes/reactive-form-classes.component';
// import { TreeComponent } from './components/tree/tree.component';
import { CoursesTreeComponent } from './components/courses-tree/courses-tree.component';
import {EventsComponent} from './components/events/events.component';
import { HttpClientModule } from '@angular/common/http';  // הוספת HttpClientModule
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [EventsComponent,HttpClientModule,RouterOutlet,RouterLink,CoursesTreeComponent, RouterLinkActive,ReactiveFormClassesComponent,TimeComponent, StudentListComponent, SaveTeacherComponent,MenuComponent,CommonModule]
})
export class AppComponent {
  // title = 'hila basis!!!!';
  // hour=new Date().getHours();
  // str='';

  // myFunction():string{
  //   if(this.hour>5&&this.hour<12)
  //  this.str='good morning';
  //  else if(this.hour>=12&&this.hour<18)
  //  this.str='good noon'
  //  else 
  //  this.str='good evening'
  //   return this.str;
  // }
  
}
