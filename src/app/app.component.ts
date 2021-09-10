import { Component, OnChanges, OnInit, SimpleChanges, ViewChildren } from '@angular/core';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-list';
  @ViewChildren(TodoListComponent) tdlComponent :TodoListComponent[] = [];
  completedList : any
  toDoListArray : any = []

  constructor(
    private _localStorageService: LocalStorageService
  ) {}

  onAddToDoChange(evt : any) {
    if(this.toDoListArray.indexOf(evt) === -1) {
      this.toDoListArray.push(evt)
    } else if(this.toDoListArray.length == 0) {
      this.toDoListArray.push(evt)
    }
  }

  ngOnInit() {
    this.completedList = this._localStorageService.get('my-app');
  }


}


