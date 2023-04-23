import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalVariablesService } from 'src/app/servicios/global-variables.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-codigoveri',
  templateUrl: './codigoveri.component.html',
  styleUrls: ['./codigoveri.component.css']
})
export class CodigoveriComponent {
  form: FormGroup;

  constructor(  private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private globalVariables : GlobalVariablesService) 
    {this.form = this.formBuilder.group({
      codigo: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern("^[0-9]*$")]]
    }); }

    get codigo() {
      return this.form.get('codigo') as FormControl;
    }
    onSubmit() {
 

      this.http.post<any>(this.globalVariables.apiUrl + '/validaCode', { codigo: this.codigo.value }).subscribe(
        response => {
          if (response && response.status && response.status >= 400) {
            alert(`Se produjo un error: ${response.error()};
            }`);
          } else {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Código verificado',
              showConfirmButton: false,
              timer: 1500
            });
            setTimeout(() => {
            this.router.navigate(['/login']); 
            }, 1500);
          }},
        
        error => {
          alert(`Se produjo un error: ${error.message}`);

    });
  } 
}
