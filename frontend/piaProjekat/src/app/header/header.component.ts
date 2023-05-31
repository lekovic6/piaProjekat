import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isLoggedIn: Observable<boolean>;
  username: string = '';
  userRole: string = '';

  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn();

    // Change values everytime login or logout happen
    // ovo se izvrsava svaki put kad loggedIn promeni vrednost
    this.isLoggedIn.subscribe(loggedIn => {
      if (loggedIn){
        const user:User = this.loginService.getUser();
        this.username = user.username;
        this.userRole = user.role;
      } else {
        this.username = '';
        this.userRole = '';
      }
    })
    
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/loginUser']);
  }

  
}
