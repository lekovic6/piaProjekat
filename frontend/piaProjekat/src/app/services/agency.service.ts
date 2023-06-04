import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Worker } from '../models/worker';

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

  updateAgency(username, agencyName, agencyAdress, tid, description, profilePictureData, profilePictureContentType){
    const data = {
      username:username,
      agencyName:agencyName,
      agencyAdress:agencyAdress,
      tid:tid,
      description:description,
      profilePictureData:profilePictureData,
      profilePictureContentType:profilePictureContentType
    }

    return this.http.post(this.uri + '/user/updateAgency', data);
  }

  getAgencyWorkers(agencyUsername){
    const data = {
      agencyUsername:agencyUsername
    }

    return this.http.post(this.uri + '/user/getAgencyWorkers', data);
  }

  saveWorkerChanges(worker: Worker){
    const data = {
      worker:worker
    }

    return this.http.post(this.uri + '/user/saveWorkerChanges', data);
  }

  deleteWorker(worker: Worker){
    const data = {
      worker:worker
    }

    return this.http.post(this.uri + '/user/deleteWorker', data);
  }

  addWorker(worker: Worker){
    const data = {
      worker:worker
    }

    return this.http.post(this.uri + '/user/addWorker', data);
  }
  
}
