import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { GlobalVariablesService } from 'src/app/servicios/global-variables.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  constructor ( 
  private fb:FormBuilder,
  private http: HttpClient,
  private router: Router, 
  private toastr : ToastrService,
  private globalService : GlobalVariablesService ) { }
  formu = this.fb.group({
    'nombre_completo':['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
    'correo': ['', [Validators.required, Validators.email]], 
    'password':['',[Validators.required, Validators.minLength(5), Validators.maxLength(16)]],
    'telefono':['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    'confirmPassword': ['', [Validators.required, this.matchValues('password')]]
  }, {validator: this.passwordsMatchValidator});
  
  matchValues(matchTo: string): ValidatorFn {
    return (control) => {
      const formGroup = control.parent;
      if (formGroup) {
        const matchFrom = formGroup.get(matchTo);
        if (matchFrom && control.value !== matchFrom.value) {
          return { 'mismatch': true };
        }
        if (control.touched && control.value === null) {
          return { 'required': true };
        }
      }
      return null;
    };
  }

  passwordsMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')!;
    const confirmPassword = formGroup.get('confirmPassword')!;
    if (password.value === '' || confirmPassword.value === '') {
      confirmPassword.setErrors(null);
      return null;
    }
    
    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    } else {
      confirmPassword.setErrors(null);
    }
    
    return null;
  }

  get nombre_completo(){ return this.formu.get('nombre_completo') as FormControl}
  get correo(){ return this.formu.get('correo') as FormControl}
  get password(){return this.formu.get('password') as FormControl}
  get telefono(){return this.formu.get('telefono') as FormControl}
  get confirmPassword(){return this.formu.get('confirmPassword') as FormControl}

  registrarUsuario() {
   
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.set('nombre_completo', this.formu.value.nombre_completo!);
    body.set('correo', this.formu.value.correo!);
    body.set('password', this.formu.value.password!);
    body.set('telefono', this.formu.value.telefono!);

    this.http.post<User>(this.globalService.apiUrl + '/registrar', body.toString(), { headers }).subscribe(
      (response) => {
        Swal.fire({
          title: 'Bienvenido',
          text: 'Verifique su correo para activar su cuenta',
          icon: 'success',
          timer: 3000,
          showConfirmButton: false,
          buttonsStyling: false,
        });
        setTimeout(() => {
        this.router.navigate(['/validacodigo']);
        }, 3000);
      },
      (error) => {
        console.log(error);
        this.toastr.error('Error al registrar el usuario', 'Error');  
      }

   
    
  



    );
    }
    
}
