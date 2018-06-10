import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';//step1
import { C1Component } from '../c1/c1.component';
import { C2Component } from '../c2/c2.component';
import { C3Component } from '../c3/c3.component';
import { DefaultComponent } from '../default/default.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';


//step2
const routes:Routes=[
{path:'c1',component:C1Component},
{path:'c2',component:C2Component},
{path:'c3',component:C3Component},
{path:'',component:DefaultComponent},
{path:'**',component:PagenotfoundComponent},


];

@NgModule({
  imports: [

//step3
    RouterModule.forRoot(routes)
  
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModuleModule { }
