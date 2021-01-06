import { Component } from '@angular/core';
import { ITodo } from './todo-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = '';
  todo: ITodo;

  todos: ITodo[] = [
    {
      title: 'go running',
      done: false,
      edited: true,
    },
    {
      title: 'call coach',
      done: false,
      edited: true,
    },
    {
      title: 'do homework',
      done: false,
      edited: true,
    },
  ];

  addTodo() {
    if (this.title) {
      this.todo = {
        title: this.title,
        done: false,
        edited: true,
      };
      this.todos.push(this.todo);
      this.title = '';
    }
  }

  toggleCheck(todo) {
    todo.done = !todo.done;
  }

  editTodo(todo) {
    todo.edited = !todo.edited;
  }

  deleteTodo(i) {
    this.todos.splice(i, 1);
  }
}
