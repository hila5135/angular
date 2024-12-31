import { Component } from '@angular/core';

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [],
  templateUrl: './time.component.html',
  styleUrl: './time.component.css'
})
export class TimeComponent {
title = 'hila basis!!!!';
hour=new Date().getHours();
str='';

myFunction():string{
  if(this.hour>5&&this.hour<12)
 this.str='good morning';
 else if(this.hour>=12&&this.hour<18)
 this.str='good noon'
 else 
 this.str='good evening'
  return this.str;
}
}
