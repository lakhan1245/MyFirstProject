import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { F1c1Component } from './f1c1/f1c1.component';
import { F1c2Component } from './f1c2/f1c2.component';


const routes:Routes=[
  {path:'f1c1',component:F1c1Component},
  {path:'f1c1',component:F1c2Component},
  
  
  ];
  
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})



//step2
export class FeatureRoutingModule { }

