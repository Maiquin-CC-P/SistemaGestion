import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PerfilComponent } from "./perfil/perfil.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'perfil',
          component: PerfilComponent
        },
        {
          path: 'user',
          component: UserComponent
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
  export class SecurityRoutingModule { }