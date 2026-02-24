import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [TodoListComponent],
  imports: [CommonModule,FormsModule,TranslateModule],   
  exports: [TodoListComponent]
})
export class UiModule {}