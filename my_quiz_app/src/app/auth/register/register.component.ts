import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    this.authService.register(email, password).subscribe(
      (response) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          console.log('Registered successfully');
          this.router.navigate(['/login']);
        } else {
          console.error('Invalid token received');
        }
      },
      (error) => {
        console.error('Registration failed:', error);
      }
    );
  }
}
