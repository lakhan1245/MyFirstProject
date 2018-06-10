import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { S1c1Component } from './s1c1/s1c1.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[S1c1Component],
  declarations: [S1c1Component]
})
export class SharedModule { }
