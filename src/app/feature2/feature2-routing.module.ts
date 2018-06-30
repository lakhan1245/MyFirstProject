import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { F2c2Component } from './f2c2/f2c2.component';
import { F2c1Component } from './f2c1/f2c1.component';


const routes:Routes=[
  {path:'f2c1',component:F2c1Component},
  {path:'f2c1',component:F2c2Component},
  
  
  ];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class Feature2RoutingModule { }
