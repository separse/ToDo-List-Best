import { Component } from '@angular/core';

@Component({
  selector: 'sep-todo-not-found',
  template: `
    <div class="container">
      <h1>Page not found</h1>
      <h2>We're sorry, we couldn't find the page you requested.</h2>
    </div>
  `,
  styles: [
    `
      h1,
      h2 {
        text-align: center;
        padding: 0.5em 0.5em 0;
        color: #dc3545;
        font-family: sans-serif;
      }
    `,
  ],
})
export class NotFoundComponent {}
