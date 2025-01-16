import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MyEvent } from "../models/MyEvent";
// import { MyEvent } from '../../../models/MyEvent';
@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  private url = "https://eventsapi.onrender.com/api/Events";
  events$: Observable<MyEvent[]>=of([]);
 

  constructor(private http : HttpClient) { }


  getEvents(){
    this.http.get<MyEvent[]>(this.url).subscribe( (data: MyEvent[])=>{
    this.events$ = of(data);
    console.log(data);
    
    });
  }

  addEvent(event: MyEvent){
    this.http.post<MyEvent>(this.url, event);
return this.http.get<MyEvent[]>(this.url).subscribe((data:MyEvent[])=>{
  this.events$ = of(data);
})
  }

}

