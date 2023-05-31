import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  
  constructor(private loginService:LoginService, private router:Router) { }

  username: string;
  password: string;

  

  loginUser(){
    this.loginService.login(this.username, this.password).subscribe((user:User) =>{
      if (user) {
        // ovde zapravo mislim da i clijenta i agencju saljem na home
        if (user.role === 'client'){
          this.router.navigate(['/']);
        }
        else{ // mozda agenciju da posaljem na komponentu na kojoj se prikazuju poslovi
          this.router.navigate(['/agency']);
        }

        // mozda da ovo uradim u servisu:?
        localStorage.setItem('user', JSON.stringify(user));
        this.loginService.isLoggedinSubject.next(true); // sending info to loginService that someone is logged in
      }
      else alert('bad data');
    })
  }

  


}
