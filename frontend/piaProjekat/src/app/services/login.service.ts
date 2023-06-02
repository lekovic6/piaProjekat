import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  private readonly USER_KEY = 'user';

  uri = 'http://localhost:4000';


  login(username, password){
    const data={
      username: username,
      password: password
    }
    
    return this.http.post(this.uri + '/guest/loginUser', data);
    /*
    .pipe(
      tap((user: User) => {
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
        this.isLoginSubject.next(true);
      })
    );
    */ // dal ovo da ovde stavim umesto toga istog u login komponenti
  }

  private hasUser(): boolean {
    return !!localStorage.getItem(this.USER_KEY);
  }

  isLoggedinSubject = new BehaviorSubject<boolean>(this.hasUser());

  isLoggedIn(): Observable<boolean> {
    return this.isLoggedinSubject.asObservable();
  }

  logout(): void {
    localStorage.removeItem(this.USER_KEY);
    this.isLoggedinSubject.next(false);
  }

  getUser(): User {
    const userString = localStorage.getItem(this.USER_KEY);
    return JSON.parse(userString);
  }

  changePassword(username, newPassword){
    const data = {
      username:username,
      newPassword:newPassword
    };

    return this.http.post(this.uri + '/user/changePassword', data);
  }

}
