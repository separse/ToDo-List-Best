import { Component } from '@angular/core';
import { ITodo } from 'src/app/todo-interface';

@Component({
  selector: 'sep-todo-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent {
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
