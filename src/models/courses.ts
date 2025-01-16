// src/app/enums/subject.enum.ts
export enum Subject {
    Accounting = 'חשבונאות',
    SoftwareEngineering = 'הנדסת תוכנה',
    Graphics = 'גרפיקה',
  }
export class courses{

    constructor(public IdCourse:number,
     public NameCourse:string,
     public subject:Subject){}

} 