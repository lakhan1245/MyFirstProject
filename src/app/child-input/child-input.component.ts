import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-input',
  templateUrl: './child-input.component.html',
  styleUrls: ['./child-input.component.css']
})
export class ChildInputComponent implements OnInit {
@Input() sendtochild;

  constructor() { }

  ngOnInit() {
  }

  myfunc()
  {
   alert(this.sendtochild);
  }
 

}
