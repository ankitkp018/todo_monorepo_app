import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UiModule } from '../../../ui/src/lib/ui.module';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from '../../../data-access/src/lib/store/todo.reducer';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../../core/src/lib/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { TodoPageComponent } from './todo-page/todo-page.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: AppComponent
  }
]

@NgModule({
  declarations: [AppComponent, TodoPageComponent],
  imports: [
  BrowserModule,
  FormsModule,
  UiModule,
  StoreModule.forRoot({ todo: todoReducer }),
  HttpClientModule,
  AppRoutingModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  })
],
  bootstrap: [AppComponent]
})
export class AppModule {}