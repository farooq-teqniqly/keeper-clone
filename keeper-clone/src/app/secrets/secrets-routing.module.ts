import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecretsViewComponent } from './secrets-view/secrets-view.component';

const routes: Routes = [
  {
    path: '',
    component: SecretsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretsRoutingModule { }
