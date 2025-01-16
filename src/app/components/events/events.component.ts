 import { Component,OnInit } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { EventServiceService } from '../../../services/event-service.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit{
constructor(public eventService: EventServiceService){}

ngOnInit():void {
  this.eventService.getEvents();
}
}
