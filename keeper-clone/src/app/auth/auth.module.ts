import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthViewComponent } from './auth-view/auth-view.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    AuthViewComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
