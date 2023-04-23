import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router, private changeDetectorRef: ChangeDetectorRef) { }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  logOut() {
    if (confirm('¿Desea cerrar sesión?')) {
      this.authService.logout();

      this.router.navigate(['/login']);
      this.changeDetectorRef.detectChanges();
    } else {
      return console.error('No se pudo cerrar sesión');
    }
  }
  isSessionActive() {
    return !!localStorage.getItem('token');
  }

}
