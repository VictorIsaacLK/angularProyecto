import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Parque } from 'src/app/interfaces/parque.interface';
import { GlobalVariablesService } from 'src/app/servicios/global-variables.service';
import { ParqueService } from 'src/app/servicios/parque.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modi-parque',
  templateUrl: './modi-parque.component.html',
  styleUrls: ['./modi-parque.component.css']
})
export class ModiParqueComponent {
  parque: Parque[] = [];
  form : FormGroup;
  id : number = 0;

  constructor(private globalVariables : GlobalVariablesService,
    private parqueService : ParqueService,
    private http: HttpClient,
    private fb : FormBuilder,
    private route : ActivatedRoute,
    private router : Router,
    ) {  this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      medidas: ['', [Validators.required]],
      ubicacion: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
    });
  
   }
   
   get nombre() {
    return this.form.get('nombre') as FormControl;
  }
  get medidas() {
    return this.form.get('medidas') as FormControl;
  }
  get ubicacion() {
    return this.form.get('ubicacion') as FormControl;
  }
  get telefono() {
    return this.form.get('telefono') as FormControl;
  }

  ngOnInit(): void {
    this.route.params.pipe(catchError(error => of({ id: null }))).subscribe(params => {this.id = params['id']});
    this.getParques();
  }
  getParques(){
    this.parqueService.getParque(this.id).subscribe((parque)=> {this.form.patchValue(parque);
    });
  }
  onSubmit(parque: Parque): void {
    this.parqueService.updateParque(parque, this.id).subscribe(
      response => {
        Swal.fire({
          title: 'Parque actualizado',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
         
        });
        setTimeout(() => {
        this.router.navigate(['see-parques']);
        }, 1500);
      },
      error => {
        Swal.fire({
          title: 'Error al actualizar',
          icon: 'error',
          showConfirmButton: false,
          timer: 1500
        });

        
      }
    );
  }



}
