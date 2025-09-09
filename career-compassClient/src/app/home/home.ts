import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
