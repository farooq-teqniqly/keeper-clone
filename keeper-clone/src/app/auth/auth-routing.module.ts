import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthViewComponent } from './auth-view/auth-view.component';

const routes: Routes = [
  {
    path: '',
    component: AuthViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
