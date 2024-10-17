import { Component } from '@angular/core';
import { ScheduleListComponent } from "./schedule-list/schedule-list.component";

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [ScheduleListComponent],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {

}
