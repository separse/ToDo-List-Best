import { Component } from '@angular/core';

@Component({
  selector: 'sep-todo-header',
  template: `
    <div id="header">
      <div class="row">
        <div class="col-lg-2">
          <span class="badge badge-dark">Sepehr Roshanpour</span>
        </div>
        <div class="col-lg-8">
          <h1>Todo List</h1>
          <p><a routerLink="/">Home</a> | <a routerLink="/about">About</a></p>
        </div>
        <div class="col-lg-2">
          <img src="/assets/pnmo.jpg" alt="pnmo" />
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      #header {
        background-color: #005896;
        color: #e9e6f0;
        text-align: center;
        padding: 0.7em;
      }
      img {
        width: 100%;
        height: auto;
        float: left;
      }
      a {
        text-decoration: none;
        color: #d5d3db;
      }
    `,
  ],
})
export class HeaderComponent {}
