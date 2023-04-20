import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb : FormBuilder, private authService : AuthService,private router:Router )  {   
    this.form= this.fb.group({
    correo: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  });}
  
  get password(){ return this.form.get('password') as FormControl}
  get correo(){ return this.form.get('correo') as FormControl}

  onSubmit(values: User)
  {  
    this.authService.login(values).subscribe((response:any) =>
    {
      if (response.user.status === 0) {
        alert ('Usuario deshabilitado');
        this.router.navigate(['/login']);
        return;
      }
      localStorage.setItem('token',response.token);
      this.authService.info(response.user.id).subscribe(user =>
      { 
      });
      this.router.navigate(['/agregarparque']);
    },
    error => {
      console.log(error); 
    });
  }
  
}
