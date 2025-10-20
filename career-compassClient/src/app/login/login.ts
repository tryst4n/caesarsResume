import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { lastValueFrom } from 'rxjs';

const domain = "http://localhost:5063/";

@Component({
  selector: 'app-login',
  imports: [RouterOutlet, RouterModule, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginUsername: string = "";
  loginPassword: string = "";

  constructor(public http: HttpClient, public router: Router,) { }

  async login(): Promise<void> {
    try {
      let loginDTO = {
        username: this.loginUsername,
        password: this.loginPassword
      };
      console.log(loginDTO);

      let x = await lastValueFrom(this.http.post<any>(domain + "api/Users/Login", loginDTO));
      console.log(x);
      sessionStorage.setItem("token", x.token);
      sessionStorage.setItem("username", x.username);

      this.router.navigate(['/home']).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error("Login failed", error);
      return;
    }
  }
}
