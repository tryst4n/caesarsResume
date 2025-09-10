import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { lastValueFrom } from 'rxjs';

const domain = "https://localhost:7216/";

@Component({
  selector: 'app-login',
  imports: [RouterOutlet, RouterModule, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginUsername: string = "";
  loginPassword: string = "";

    constructor(public http: HttpClient) { }

  async login(): Promise<void> {
  
      let loginDTO = {
        username: this.loginUsername,
        password: this.loginPassword
      };
      console.log(loginDTO);

      let x = await lastValueFrom(this.http.post<any>(domain + "api/Users/Register", loginDTO));
      console.log(x);
    }

}
