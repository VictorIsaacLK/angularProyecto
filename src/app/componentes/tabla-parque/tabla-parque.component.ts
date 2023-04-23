import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Parque } from 'src/app/interfaces/parque.interface';
import { ParqueService } from 'src/app/servicios/parque.service';

@Component({
  selector: 'app-tabla-parque',
  templateUrl: './tabla-parque.component.html',
  styleUrls: ['./tabla-parque.component.css']
})
export class TablaParqueComponent {
  parques: Parque[] = []

  constructor(
    private parqueService: ParqueService,
    private route : Router
  ) { }

  ngOnInit() {
    this.getParques();
  }
  getParques() {
    this.parqueService.getParques().subscribe((parques)=> 
      this.parques = parques);
  }
  getpark(id: number)
  {
   this.route.navigate(['detalles-parque',id])
  }
  editarParque(id: number)
  {
   this.route.navigate(['edit-parque',id])
  }

  eliminarParque(id: number):void{
if(confirm("¿Estas seguro de eliminar el parque?")){
  this.parqueService.deteleParque(id).subscribe(
    () => {
      this.parques = this.parques.filter(parque => parque.id !== id);
    },
    (error) => console.log(error)
  )
  }
  
   
}
}
