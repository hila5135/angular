import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Classes } from '../../../models/Classes';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-classes',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-classes.component.html',
  styleUrl: './reactive-form-classes.component.css'
})
export class ReactiveFormClassesComponent implements OnInit {
//  public AllClasses = 
AllClasses:Classes [] =  [
  new Classes(1,'ח'),
  new Classes(1,'ז'),
  new Classes(5,'ו'),
  new Classes(3,'ב')
];
classesForm!: FormGroup;
constructor(private fb:FormBuilder){}

ngOnInit():void{
  this.classesForm = this.fb.group({
    IdClass:['',[Validators.required, Validators.max(10)]],
    NameClass:['',[Validators.required,Validators.maxLength(2)]]
  });

}

get f():{[key:string]:AbstractControl}{
  return this.classesForm.controls;
}
onSubmit(){
  console.log(this.classesForm);
  
}
onSave(){
  if(this.classesForm.valid){
    this.AllClasses.push(this.classesForm.value);
  }
this.AllClasses = [...this.AllClasses];
console.log(this.AllClasses);

}
 }
