import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class LoginService {
  loginUser() {
      return ['Blue Lock', 'One piece', 'Naruto', 'Death Note'];
  }
}
