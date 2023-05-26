import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000';


  registerClient(username, password, email, firstname, lastname, phoneNumber, base64Data, base64ContentType){
    return null;
  }

  registerAgency(username, password, email, agencyName, agencyAdress, tid, description){
    return null;

  }
}
