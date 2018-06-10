import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { RoutingModuleModule } from './routing-module/routing-module.module';
import { DefaultComponent } from './default/default.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Feature1Module } from './feature1/feature1.module';
import { Feature2Module } from './feature2/feature2.module';
import { Feature3Module } from './feature3/feature3.module';


@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    C3Component,
    DefaultComponent,
    PagenotfoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,FormsModule,RoutingModuleModule,Feature1Module,Feature2Module,Feature3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
