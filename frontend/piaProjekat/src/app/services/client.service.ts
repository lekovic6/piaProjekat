import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  uri = 'http://localhost:4000';

  getClientByUsername(username){
    const data = {
      username:username
    }
    return this.http.post(this.uri + '/user/getClientByUsername', data);
  }

  updateClient(username, firstname, lastname, phoneNumber, profilePictureData, profilePictureContentType){
    const data = {
      username:username,
      firstname:firstname,
      lastname:lastname,
      phoneNumber:phoneNumber,
      profilePictureData:profilePictureData,
      profilePictureContentType:profilePictureContentType
    }
    return this.http.post(this.uri + '/user/updateClient', data);
  }
  
}
