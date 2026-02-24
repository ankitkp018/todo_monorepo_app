import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    
    const params = new URLSearchParams(window.location.search);
    const auth = params.get('auth');

    if (auth === 'true') {
      localStorage.setItem('isLoggedIn', 'true');
      window.history.replaceState({}, '', '/');
    }
  }

 
}