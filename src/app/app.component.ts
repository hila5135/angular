import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentListComponent } from "./components/student-list/student-list.component";
import { SaveTeacherComponent } from "./components/save-teacher/save-teacher.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, StudentListComponent, SaveTeacherComponent]
})
export class AppComponent {
  title = 'hila basis!!!!';
  hour=new Date().getHours();
  str='';

  myFunction():string{
    if(this.hour>5&&this.hour<12)
   this.str='good morning';
   else if(this.hour>12&&this.hour<18)
   this.str='good noon'
   else 
   this.str='good evening'
    return this.str;
  }
}
