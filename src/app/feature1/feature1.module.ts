import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { F1c1Component } from './f1c1/f1c1.component';
import { F1c2Component } from './f1c2/f1c2.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,SharedModule
  ],

  exports:[F1c1Component,F1c2Component,SharedModule // inluded share to get shared get shared with f2
  ],
  declarations: [F1c1Component, F1c2Component]
})
export class Feature1Module { }
