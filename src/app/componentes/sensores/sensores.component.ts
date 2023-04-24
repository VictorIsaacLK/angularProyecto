import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sensor } from 'src/app/interfaces/sensor';
import { GlobalVariablesService } from 'src/app/servicios/global-variables.service';
import { SensoresService } from 'src/app/servicios/sensores.service';

@Component({
  selector: 'app-sensores',
  templateUrl: './sensores.component.html',
  styleUrls: ['./sensores.component.css'],
})
export class SensoresComponent {
  id: number = 0;
  sensores: Sensor[] = [];
  tipoSensor: string = '';
  private intervaloSensores: any;

  constructor(
    private sensoreService: SensoresService,
    private cd: ChangeDetectorRef,
    private http: HttpClient,
    private globalService: GlobalVariablesService,
  ) {}

  ngOnInit() {
    this.getSensores();
    this.intervaloSensores = setInterval(() => {
      this.getSensores();
    }, 3000);
  }
  getSensores() {
    this.sensoreService.getSensores().subscribe((sensores) => {
      this.sensores = sensores;
      this.cd.markForCheck();
    });
  }

  cambiarStatus() {
    const url = this.globalService.apiUrl + '/led/update/1';
    this.http.put(url, {}).subscribe(
      (response) => console.log('Status cambiado'),
      (error) => console.log('Error al cambiar status', error)
    );
  }
  ngOnDestroy() {
    clearInterval(this.intervaloSensores);
  }
}
