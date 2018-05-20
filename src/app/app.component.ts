import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  istrue:true;
  myName:string='enter Name';
  sum1:number=0;
   Num:number=0;
   result:number=0;
   angularLogo="assets/images/lord.jpg"
   imagwidth="500px";
   headstyle={
'color':'yellow',
'font-size':'20px',
'font-style':'italic'


   }

   new1={

    'color':'pink',
    'font-weight':'bold'


   }
   


  abc()
  {
    alert(this.myName);
  }

  sum()
  {
    this.sum1=(+this.sum1)+(+this.Num);
     return this.sum1;
  }

  myfunc()

  {
  this.result=this.sum();
  if(this.result!=0)
  {
    return true;
  }
  else if(this.result==0 && this.result==undefined)
  {
   return false;
  }
  }
}
