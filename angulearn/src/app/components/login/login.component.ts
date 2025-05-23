import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { LoginService } from "../../services/login.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  errMsg = '';

  constructor(private loginService: LoginService, private router: Router) {
    // let Service = new LoginService();
  }

  onLogin() {
    this.loginService.login(this.email, this.password).subscribe({
      next: (response) => {
        const token = response.data?.login?.token;
        if (token) {
          localStorage.setItem('token', token);
          this.router.navigate(['/']);
        } else {
          this.errMsg = 'Invalid credentials';
        }
      },
      error: () => {
        this.errMsg = 'Login failed. Try again.'

      }
    })
  }

}
