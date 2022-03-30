import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecretsViewComponent } from './secrets-view/secrets-view.component';



@NgModule({
  declarations: [
    SecretsViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SecretsViewComponent
  ]
})
export class SecretsModule { }
