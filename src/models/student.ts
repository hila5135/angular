import internal from "stream";
export class student{
  
//     constructor(
//         public id : number , 
//         public firstName : string,
//         public surname : string,
//         public address : string,
//         public phone: string,
//         public isActive: boolean,
//         public avg : number ,
//         public leaveDate?: Date)        
//    { }
constructor(public Id:number,
    public Name:string,
    public Address:string,
    public Phone:string,
    public AvgMark:number,
    public DepartureDate?:Date,
    public isActive:boolean=true,
    public Payed:boolean=false
){}
}