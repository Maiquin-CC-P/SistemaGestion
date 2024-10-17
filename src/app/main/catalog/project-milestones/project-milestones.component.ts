import { Component } from '@angular/core';
import { ProjectMilestonesListComponent } from "./project-milestones-list/project-milestones-list.component";

@Component({
  selector: 'app-project-milestones',
  standalone: true,
  imports: [ProjectMilestonesListComponent],
  templateUrl: './project-milestones.component.html',
  styleUrl: './project-milestones.component.scss'
})
export class ProjectMilestonesComponent {

}
