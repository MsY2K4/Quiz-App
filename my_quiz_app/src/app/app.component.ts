import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.updateUserRole();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateUserRole();
      }
    });
  }

  updateUserRole() {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLoggedIn = true;
      this.authService.getUserRole(token).subscribe(
        (response) => {
          if (response.role === 'admin') {
            this.isAdmin = true;
          }
        },
        (error) => {
          console.error('Error fetching user role:', error);
        }
      );
    }
  }
  
  onLogout() {
    this.isLoggedIn = false;
    this.isAdmin = false;
  }
}