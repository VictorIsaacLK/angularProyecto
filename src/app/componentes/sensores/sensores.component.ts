import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sensor } from 'src/app/interfaces/sensor';
import { SensoresService } from 'src/app/servicios/sensores.service';

@Component({
  selector: 'app-sensores',
  templateUrl: './sensores.component.html',
  styleUrls: ['./sensores.component.css'],
})
export class SensoresComponent {
  id: number = 0;
  sensores: Sensor[] = [];

  constructor(
    private sensoreService: SensoresService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getSensores();
  }

  getSensores() {
    this.sensoreService
      .getSensores()
      .subscribe((sensores) => (this.sensores = sensores));
  }
}
