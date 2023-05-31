import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http:HttpClient) { }

  uri = 'http://localhost:4000';

  getAllClientPlaces(clientUsername){
    const data = {
      clientUsername:clientUsername
    };

    return this.http.post(this.uri + '/place/getAllClientPlaces', data);
  }
}
