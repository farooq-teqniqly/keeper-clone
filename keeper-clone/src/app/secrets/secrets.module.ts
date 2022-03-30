import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecretsViewComponent } from './secrets-view/secrets-view.component';
import { SecretsRoutingModule } from './secrets-routing.module';



@NgModule({
  declarations: [
    SecretsViewComponent
  ],
  imports: [
    CommonModule, SecretsRoutingModule
  ],
  exports: [
    SecretsViewComponent
  ]
})
export class SecretsModule { }
