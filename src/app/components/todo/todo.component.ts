import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() toDo: any;

  @Output() toDoChange = new EventEmitter<{}>();
  statusChecked : boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  onCompleteChange(evt: any, status : any = MatCheckboxChange) {  
    this.statusChecked = status.checked
    this.toDoChange.emit({
      evt,
      complete: status.checked
    });
  }


}
