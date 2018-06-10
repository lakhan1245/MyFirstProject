import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { F2c1Component } from './f2c1/f2c1.component';
import { F2c2Component } from './f2c2/f2c2.component';
import { F1c1Component } from '../feature1/f1c1/f1c1.component';
import { Feature1Module } from '../feature1/feature1.module';

@NgModule({
  imports: [
  CommonModule,Feature1Module  // since we have imported featured module1 we can access share module component in this feature2 module component
  ],

  exports:[F2c1Component,F2c2Component],
  declarations: [F2c1Component, F2c2Component]
})
export class Feature2Module { }
