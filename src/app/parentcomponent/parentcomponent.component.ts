import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent implements OnInit {

  constructor() { }

  iamparentproperty="i am parent property";

  Parentmethod()
  {
    alert("calling from parent");
  }


  ngOnInit() {
  }

}
