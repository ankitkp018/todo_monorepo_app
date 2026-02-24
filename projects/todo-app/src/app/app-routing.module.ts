import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { AuthGuard } from '../../../core/src/lib/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: TodoPageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}