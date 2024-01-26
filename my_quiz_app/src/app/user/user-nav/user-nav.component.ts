import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrl: './user-nav.component.css'
})
export class UserNavComponent {
  isMenuOpen = false;
  @Output() logoutEvent = new EventEmitter<void>();

  constructor(private authService: AuthService, private router: Router) { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
      this.logoutEvent.emit();
    });
  }
  
}
