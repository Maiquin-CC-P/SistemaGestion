import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ScheduleComponent } from "./schedule/schedule.component";
import { MainItemsComponent } from "./main-items/main-items.component";
import { CpcComponent } from "./cpc/cpc.component";
import { ProjectMilestonesComponent } from "./project-milestones/project-milestones.component";

const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'schedule',
          component: ScheduleComponent
        },
        {
          path: 'main-items',
          component: MainItemsComponent
        },
        {
          path: 'cpc',
          component: CpcComponent
        },
        {
          path: 'project-milestones',
          component: ProjectMilestonesComponent
        },
      ]
    }
  ]
  
  @NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routes),
    ],
    exports: [
      RouterModule
    ]
  })
  export class CatalogRoutingModule { }