import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('todo-app');
  
  newTodo: Todo = new Todo();
  todos: Todo[] = [];
  
  constructor() {
    this.todos.push(new Todo("Kutyát sétáltatni"));
    this.todos.push(new Todo("Be kell vásárolni", true));
  }
  
  add() {
    if (this.newTodo.content.startsWith('!')) {
      this.newTodo.done = true;
    }

    this.todos.push(this.newTodo);
    this.newTodo = new Todo();
  }

  mark(todo: Todo) {
    todo.done = true;
  }
}

export class Todo {
  content: string = "";
  done: boolean = false;

  constructor(content: string = '', done: boolean = false) {
    this.content = content;
    this.done = done;
  }
}