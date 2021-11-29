import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[] = [];

  inputTodo:string = '';

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

  onClickToggleDone(id: number): void {
    this.todos.map((todo, index) => {
      if (index === id) todo.completed = !todo.completed;
      return todo;
    });
  }

  onDeleteTodo(id: number) {
    this.todos = this.todos.filter((todo, index) => index !== id);
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = ''; //to clear the input
  }

}
