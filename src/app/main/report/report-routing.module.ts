import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'dashboard',
          component: DashboardComponent
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
  export class ReportRoutingModule { }