import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-infouser',
  templateUrl: './infouser.component.html',
  styleUrls: ['./infouser.component.css']
})
export class InfouserComponent {
  user : User[] = [];

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.getInfoUser();
  }

  getInfoUser(){
    this.authService.Infouser().subscribe((user) => this.user = [user]);
  }



  

}
