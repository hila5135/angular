import { Routes } from '@angular/router';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { EmptyComponent } from './components/empty/empty.component';
import { InfromationPopupComponent } from './components/infromation-popup/infromation-popup.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReactiveFormClassesComponent } from './components/reactive-form-classes/reactive-form-classes.component';
import { SaveTeacherComponent } from './components/save-teacher/save-teacher.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { TimeComponent } from './components/time/time.component';
import { CoursesTreeComponent } from './components/courses-tree/courses-tree.component';
import { EventsComponent } from './components/events/events.component';
import { AuthComponent } from './components/auth/auth.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {path : '' , component: EmptyComponent },
  {path : 'student list' , component: StudentListComponent},
  {path : 'teachers details' , component: SaveTeacherComponent},
  {path : 'all courses' , component: CoursesListComponent},
  {path : 'all courses with silibus' , component: CoursesTreeComponent},
  {path : 'add classes' , component: ReactiveFormClassesComponent},
  {path : 'time' , component: TimeComponent},
  {path : 'api' , component: EventsComponent},
  // {path : 'all courses' , loadComponent:()=>
  // import('./components/courses-list/courses-list.component').then(
  //   (m)=>m.CoursesListComponent
  // ) ,
  // canActivate: [authGuard],},
  {path : 'home' ,  loadComponent: () =>
  import('./components/home/home.component').then(
    (m) => m.HomeComponent
    ),
    canActivate: [authGuard], } ,
    {path : 'auth' , component: AuthComponent}
    //   {path: 'student details'  , component : StudentDetailsComponent}
];
