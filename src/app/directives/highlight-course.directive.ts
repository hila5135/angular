import { Directive , ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightCourse]',
  standalone: true
})
export class HighlightCourseDirective {

  colors = [
    'Aqua',
    'Yellow',
    'Lime',
    'Pink',
    'Orange',
    'Silver',
    'Red',
    'Teal',
    'Turquoise',
    'LightCoral',
    'LightPink',
    'PeachPuff',
    'Lavender',
    'MistyRose',
    'Honeydew',
    'PaleGreen',
    'LightYellow',
    'LightSkyBlue',
    'LightGreen',
    'LightBlue',
    'SkyBlue',
    'Beige',   
    'LightSeaGreen', 
    'Lavender',    
    'MediumPurple', 
    'PapayaWhip',
    'AntiqueWhite',
    'Seashell'
  ];  
  TheColor = ''
  constructor(private elementt : ElementRef) { }
  ///the random
  randomColor=()=>{
    let index = Math.floor(Math.random()* this.colors.length)
    this.TheColor = this.colors[index]    
  }

  createHighlight(){
    this.randomColor();
    this.elementt.nativeElement.style.backgroundColor = this.TheColor;
  }
  ngOnInit() {
    this.createHighlight();
  }
}
