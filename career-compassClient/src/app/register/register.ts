import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { lastValueFrom } from 'rxjs';

const domain = "https://localhost:7216/";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  registerUsername: string = "";
  registerEmail: string = "";
  registerPassword: string = "";
  registerPasswordConfirm: string = "";

  constructor(public http: HttpClient) { }

  async register(): Promise<void> {

    let registerDTO = {
      username: this.registerUsername,
      email: this.registerEmail,
      password: this.registerPassword,
      passwordConfirm: this.registerPasswordConfirm
    };

    let x = await lastValueFrom(this.http.post<any>(domain + "api/Users/Register", registerDTO));
    console.log(x);
  }
}
