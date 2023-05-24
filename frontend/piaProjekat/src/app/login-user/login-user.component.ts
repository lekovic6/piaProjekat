import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  
  constructor(private loginService:LoginService) { }

  username: string;
  password: string;

  loginUser(){

    
  
  }

  loginAdmin(){

  }


}
