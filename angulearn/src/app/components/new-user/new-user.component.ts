import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewuserService } from '../../services/newuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.scss'
})
export class NewUserComponent {
  name = '';
  email = '';
  password = '';
  errMsg = '';

  constructor(private newUserService: NewuserService, private router: Router) {}

  onNewUser() {
    this.newUserService.newAccount(this.name, this.email, this.password).subscribe({
      next: (response) => {
        console.log(response)
        const token = response.data?.signup?.token;
        if (token) {
          localStorage.setItem('token', token);
          this.router.navigate(['/']);
        } else {
          this.errMsg = 'Invalid credentials';
        }
      },
      error: () => {
        this.errMsg = 'Create Account failed. Try again.'
      }
    })
  }
}
