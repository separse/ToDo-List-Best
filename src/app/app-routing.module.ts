import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './header/header-children/about.component';
import { TodosComponent } from './header/header-children/todos/todos.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {path: '', component: TodosComponent},
  {path: 'home', component: TodosComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
