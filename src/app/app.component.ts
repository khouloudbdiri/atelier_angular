import { Component } from '@angular/core';
import { AuthService } from './authentification/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-crud-app';
  constructor(public authService: AuthService) { }
  logout() {
    this.authService.doLogout()
  }

}