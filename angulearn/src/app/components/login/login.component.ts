import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'login', // ! <login> "login"
  imports: [NgFor],
  templateUrl: './login.component.html', // ! HTML Template
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  title = 'Angular Learn'; // !data binding
  creator = 'rksvw.io';
  favAnime: string[];

  constructor(service: LoginService) {
    // let Service = new LoginService();
    this.favAnime = service.loginUser();
  }

  // favAnime = ['Blue Lock', 'One piece', 'Naruto', 'Death Note'];

  getTitle() {
    return this.creator;
  }


  // Logic for calling an HTTP Service


}
