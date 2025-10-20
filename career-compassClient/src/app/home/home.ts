import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(public router: Router) { }
  isLogged() {
    if (sessionStorage.getItem("token") != null) {
      return true;
    }
    return false
  }

  getUsername() {
    return sessionStorage.getItem("username");
  }

  async logout() {
    sessionStorage.clear();
    this.router.navigate(["/login"]);
  }
}
