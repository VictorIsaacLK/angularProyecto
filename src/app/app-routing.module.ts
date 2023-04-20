import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarParqueComponent } from './componentes/agregar-parque/agregar-parque.component';
import { AgregarVisitanteComponent } from './componentes/agregar-visitante/agregar-visitante.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  { path: 'agregarparque', component: AgregarParqueComponent },
  { path: 'agregarvisitante', component: AgregarVisitanteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component : RegistroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
