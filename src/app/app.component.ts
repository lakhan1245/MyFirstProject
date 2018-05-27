import { Component } from '@angular/core';
import { LibraryService } from './library.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

configObject={'border':'1px solid red' , 'color':'red'}

configObject2={'myclass1':'false' , 'myclass2':'myfunc()'}

mybook3:string[];


myfunc()
{
return true;

}
getstyle()
{

  this.configObject.color='orange';
  return this.configObject;

}


constructor(private myservice:LibraryService)
{
   this.mybook3=this.myservice.books;
}

addBook(book:string)
{
  this.myservice.books.push(book);
}





}

   