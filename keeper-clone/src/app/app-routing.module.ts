import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './home/home-view/home-view.component';
import { HomeModule } from './home/home.module';
import { SecretsModule } from './secrets/secrets.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeViewComponent
  },
  {
    path: 'secrets',
    loadChildren: './secrets/secrets.module.ts#SecretsModule'
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeModule, SecretsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
