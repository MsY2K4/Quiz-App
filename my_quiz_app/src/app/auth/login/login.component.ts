import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    this.authService.login(email, password).subscribe(
      (response) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          console.log('Logged in successfully');
          this.router.navigate(['/home']);
        } else {
          console.error('Invalid token received');
        }
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }

}
