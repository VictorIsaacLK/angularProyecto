import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Parque } from 'src/app/interfaces/parque.interface';
import { GlobalVariablesService } from 'src/app/servicios/global-variables.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-parque',
  templateUrl: './agregar-parque.component.html',
  styleUrls: ['./agregar-parque.component.css'],
})
export class AgregarParqueComponent {
  parque: Parque[] = [];
  constructor(
    private http: HttpClient,
    private globalVariable: GlobalVariablesService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  formu = this.fb.group({
    nombre: ['', [Validators.required]],
    medidas: ['', [Validators.required]],
    ubicacion: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
  });

  get nombre() {
    return this.formu.get('nombre') as FormControl;
  }
  get medidas() {
    return this.formu.get('medidas') as FormControl;
  }
  get ubicacion() {
    return this.formu.get('ubicacion') as FormControl;
  }
  get telefono() {
    return this.formu.get('telefono') as FormControl;
  }

  crearParque() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const body = new URLSearchParams();
    body.set('nombre', this.formu.value.nombre!);
    body.set('medidas', this.formu.value.medidas!);
    body.set('ubicacion', this.formu.value.ubicacion!);
    body.set('telefono', this.formu.value.telefono!);

    this.http
      .post<Parque[]>(
        this.globalVariable.apiUrl + '/parque/create',
        body.toString(),
        { headers }
      )
      .subscribe(
        (response) => {
          Swal.fire({
            title: 'Parque creado',
            icon: 'success',
            confirmButtonText: 'Ok',
            timer: 1500,
          });
          setTimeout(() => {
            this.router.navigate(['/see-parques']);
          }, 1500);
        },
        (error) => {
          console.log(error);
          this.toastr.error('Error al crear el parque', 'Error');
        }
        
    );
  }
}
