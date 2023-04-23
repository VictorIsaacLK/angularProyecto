import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Parque } from 'src/app/interfaces/parque.interface';
import { ParqueService } from 'src/app/servicios/parque.service';

@Component({
  selector: 'app-detalles-parque',
  templateUrl: './detalles-parque.component.html',
  styleUrls: ['./detalles-parque.component.css']
})
export class DetallesParqueComponent {
  parques : Parque[] = [];
  id: number = 0; 
  
  constructor(private parqueService:ParqueService,  private route: ActivatedRoute, private router :Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        this.id = Number(params.get('id'));
        this.getParque();
    });

}
getParque(){
  this.parqueService.getParque(this.id).subscribe((parque) => this.parques = [parque]);
}

editarParque(id: number)
{
 this.router.navigate(['edit-parque',id])
}

eliminarParque(id: number):void{
  if(confirm("¿Estas seguro de eliminar el parque?")){
    this.parqueService.deteleParque(id).subscribe(
      () => {
        this.router.navigate(['see-parques']);

      },
      (error) => console.log(error)
    )
    }
    
     
  }


}
