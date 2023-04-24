import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarParqueComponent } from './componentes/agregar-parque/agregar-parque.component';
import { AgregarVisitanteComponent } from './componentes/agregar-visitante/agregar-visitante.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CodigoveriComponent } from './componentes/codigoveri/codigoveri.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { TablaParqueComponent } from './componentes/tabla-parque/tabla-parque.component';
import { DetallesParqueComponent } from './componentes/detalles-parque/detalles-parque.component';
import { SensoresComponent } from './componentes/sensores/sensores.component';
import { TablaVisitanteComponent } from './componentes/tabla-visitante/tabla-visitante.component';
import { ModiParqueComponent } from './componentes/modi-parque/modi-parque.component';
import { AuthGuard } from './guards/auth.guard';
import { InfouserComponent } from './componentes/infouser/infouser.component';
import { LoginGuard } from './guards/login.guard';
import { StatusGuard } from './guards/status.guard';

const routes: Routes = [
  { path: 'agregarparque', component: AgregarParqueComponent, canActivate: [AuthGuard, StatusGuard ] },
  { path: 'agregarvisitante', component: AgregarVisitanteComponent, canActivate: [AuthGuard, StatusGuard] },
  { path: 'login', component: LoginComponent, canActivate:[LoginGuard] },
  { path: 'registro', component : RegistroComponent, canActivate:[LoginGuard]},
  { path: 'validacodigo', component : CodigoveriComponent, canActivate:[LoginGuard]},
  { path: 'inicio', component : InicioComponent},
  { path: 'see-parques', component : TablaParqueComponent, canActivate: [AuthGuard, StatusGuard]},
  { path: 'detalles-parque/:id', component : DetallesParqueComponent, canActivate: [AuthGuard, StatusGuard]},
  { path: 'sensores', component : SensoresComponent, canActivate:[AuthGuard, StatusGuard]},
  { path: 'see-visitantes', component : TablaVisitanteComponent, canActivate: [AuthGuard]},
  { path: 'edit-parque/:id', component : ModiParqueComponent, canActivate: [AuthGuard, StatusGuard]},
  { path : 'info-user', component : InfouserComponent, canActivate: [AuthGuard, StatusGuard]},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
