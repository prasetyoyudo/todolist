import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder,
  FormControl,
  FormGroup,
  Validators }          from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @Output() toDoChange = new EventEmitter<string>();
  public task      = new FormControl()


  constructor(
    private formBuilder   : FormBuilder,
  ) { }


  ngOnInit() {
    this.task = new FormControl();
  }

  addToDo(evt: any) {
    this.toDoChange.emit(evt);
  }

}
