import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AgregarParqueComponent } from './componentes/agregar-parque/agregar-parque.component';
import { AgregarVisitanteComponent } from './componentes/agregar-visitante/agregar-visitante.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { TablaParqueComponent } from './componentes/tabla-parque/tabla-parque.component';
import { DetallesParqueComponent } from './componentes/detalles-parque/detalles-parque.component';
import { SensoresComponent } from './componentes/sensores/sensores.component';
import { TablaVisitanteComponent } from './componentes/tabla-visitante/tabla-visitante.component';
import { ModiParqueComponent } from './componentes/modi-parque/modi-parque.component';


import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CodigoveriComponent } from './componentes/codigoveri/codigoveri.component';
import { RouterModule } from '@angular/router';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './servicios/auth.service';
import { TokenInterceptorService } from './interceptores/token.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregarParqueComponent,
    AgregarVisitanteComponent,
    LoginComponent,
    RegistroComponent,
    CodigoveriComponent,
    InicioComponent,
    TablaParqueComponent,
    DetallesParqueComponent, 
    SensoresComponent,
    TablaVisitanteComponent,
    ModiParqueComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    NgbCollapseModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,

  ],
  providers: [ToastrService, {provide: AuthService}, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
