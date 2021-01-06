import { Component } from '@angular/core';

@Component({
  selector: 'sep-todo-about',
  template: `
    <div class="container">
      <h1>About</h1>
      <h2>
        This project is done at the demand of the PNMCO. It shows a todo list
        which can add, remove or edit a todo task and mark it as done.
      </h2>
    </div>
  `,
  styles: [
    `
      h1,
      h2 {
        text-align: center;
        padding: 0.5em 0.5em 0;
        color: #005896;
        font-family: sans-serif;
      }
    `,
  ],
})
export class AboutComponent {}
