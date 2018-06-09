import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { MyfirstcomponentComponent } from './myfirstcomponent/myfirstcomponent.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { ChildInputComponent } from './child-input/child-input.component';
import { OutputcomponentComponent } from './outputcomponent/outputcomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    MyfirstcomponentComponent,
    ParentcomponentComponent,
    ChildcomponentComponent,
    ChildInputComponent,
    OutputcomponentComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
