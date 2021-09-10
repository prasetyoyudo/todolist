import { Component, EventEmitter, Input, Output, OnInit,ViewChildren} from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() toDos : any = [];
  @ViewChildren(TodoComponent) tdComponent :TodoComponent[] = [];
  @Output() completeChange = new EventEmitter<{}>();
  toDo : any

  constructor(
    private _localStorageService: LocalStorageService
  ) { }

  async ngOnInit() {
  }

  async onCompleteChange(change: any) {
    this._localStorageService.set('my-app', change);
    location.reload()
  }


}
