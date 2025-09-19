import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cv-manager',
  imports: [RouterModule, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './cv-manager.html',
  styleUrl: './cv-manager.css'
})
export class CvManager {
registerUsername: string = "";
  registerEmail: string = "";
  registerPassword: string = "";
  registerPasswordConfirm: string = "";

  constructor(public http: HttpClient, public router : Router) { }
}
