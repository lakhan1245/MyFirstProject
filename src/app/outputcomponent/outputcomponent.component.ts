import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-outputcomponent',
  templateUrl: './outputcomponent.component.html',
  styleUrls: ['./outputcomponent.component.css']
})
export class OutputcomponentComponent implements OnInit {
@Output() change=new  EventEmitter();
  constructor() { }

  ngOnInit() {
  }

run()
{
  this.change.emit('');
}


}
