import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Todo',
        completed: false
      },
      {
        content: 'Second Todo',
        completed: false
      }
    ]
  }

  onClickToggleDone(id: any): void {
    this.todos.map((todo, index) => {
      if (index === id) todo.completed = !todo.completed;
      return todo;
    });
  }

}
