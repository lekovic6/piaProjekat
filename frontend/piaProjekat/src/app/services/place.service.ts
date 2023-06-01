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

  getPlaceById(idPlace){
    const data = {
      idPlace:idPlace
    };

    return this.http.post(this.uri + '/place/getPlaceById', data);
  }

  addPlace(ownerUsername, type, address, numberOfRooms, area){
    const data = {
      ownerUsername:ownerUsername,
      type:type,
      address:address,
      numberOfRooms:numberOfRooms,
      area:area
      // dodati za glupi CANVAS
    };

    return this.http.post(this.uri + '/place/addPlace', data);
  }

  updatePlace(idPlace, ownerUsername, type, address, numberOfRooms, area){
    const data = {
      idPlace:idPlace,
      ownerUsername:ownerUsername,
      type:type,
      address:address,
      numberOfRooms:numberOfRooms,
      area:area
      // dodati za glupi CANVAS
    };

    return this.http.post(this.uri + '/place/updatePlace', data);
  }

  deletePlace(idPlace){
    const data = {
      idPlace:idPlace
    };
    
    return this.http.post(this.uri + '/place/deletePlace', data);
  }


}
