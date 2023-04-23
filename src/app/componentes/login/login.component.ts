import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/servicios/auth.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { timeout } from 'rxjs';
import { GlobalVariablesService } from 'src/app/servicios/global-variables.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;
  estado?: User;
  id: number = 0;

  showError: boolean = false;
  public apiFailed: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private globalService :GlobalVariablesService
  ) {
    this.form = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  get password() {
    return this.form.get('password') as FormControl;
  }
  get correo() {
    return this.form.get('correo') as FormControl;
  }
  onSubmit(values: User) {
    this.authService.login(values).subscribe(
      (response: any) => {
        if (response.user.status === 0) {
          this.toastr.error('Usuario no verificado', 'Login', {
            positionClass: 'toast-top-center',
            timeOut: 1500,
            closeButton: true,
            progressBar: true,
            progressAnimation: 'increasing',
          });
          return;
        }
        Swal.fire({
          title: 'Bienvenido',
          text: 'Iniciando sesión',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
          buttonsStyling: false,
        });

        localStorage.setItem('token', response.token);
        localStorage.setItem('id', response.user.id);
        this.authService.info(response.user.id).subscribe((user) => {});
        setTimeout(() => {
          this.router.navigate(['/see-parques']);
        }, 1500);
      },
      (error) => {
        console.log(error);
        this.toastr.error('Usuario o contraseña incorrectos', 'Login', {
          positionClass: 'toast-top-center',
          timeOut: 1500,
          closeButton: true,
          progressBar: true,
          progressAnimation: 'increasing',
        });
      }
    );
  }
}
