import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(private http:HttpClient) { }

  uri = 'http://localhost:4000';

  getAllAgencies(){
    const data = {
      role:'agency'
    }
    return this.http.post(this.uri + '/user/getAllAgencies', data);
  }

  getAgencyByUsername(username){
    const data = {
      username:username
    }
    return this.http.post(this.uri + '/user/getAgencyByUsername', data);
  }

  
  
}
