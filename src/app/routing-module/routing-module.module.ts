import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';//step1
import { C1Component } from '../c1/c1.component';
import { C2Component } from '../c2/c2.component';
import { C3Component } from '../c3/c3.component';
import { DefaultComponent } from '../default/default.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { EmptyContactService } from '../empty-contact.service';
import { RestrictService } from '../restrict.service';


//step2
const routes:Routes=[
{
  path:'About-us',
  component:C1Component, children:[{
    path:'contact-child',
    component:C3Component}]
},
{
  path:'Contact-Us',
  component:C2Component ,canActivate : [RestrictService],canDeactivate : [EmptyContactService]},


{
  path:'',
  component:DefaultComponent},

{
  path:'**',
  component:PagenotfoundComponent},


];

@NgModule({
  imports: [

//step3
    RouterModule.forRoot(routes),
   // RouterModule.forChild(routes)
  
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModuleModule { }
