import { Component, OnInit } from '@angular/core';
import { Worker } from '../models/worker';
import { AgencyService } from '../services/agency.service';
import { LoginService } from '../services/login.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddWorkerModalComponent } from '../add-worker-modal/add-worker-modal.component';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-agency-workers',
  templateUrl: './agency-workers.component.html',
  styleUrls: ['./agency-workers.component.css']
})
export class AgencyWorkersComponent implements OnInit{
  
  constructor(private agencyService:AgencyService, private loginService:LoginService, private modalService: NgbModal){ }
  
  defaultNumberForRequest = 5;
  workers:Worker[] = [];
  maxNumberOfWorkers:number;
  agencyUsername:string;
  ngOnInit(): void {
    this.maxNumberOfWorkers = this.loginService.getUser().maxNumberOfWorkers;
    this.agencyUsername = this.loginService.getUser().username;
    this.agencyService.getAgencyWorkers(this.agencyUsername).subscribe((workers:Worker[])=>{
      this.workers = workers;
      this.workers.forEach(worker => {
        worker.isExpanded = false;
        worker.isEditing = false;
      });
      // to do
    });
  }

  toggleWorkerDetails(worker: Worker) {  // Add this method
    worker.isExpanded = !worker.isExpanded;
  }
  
  enableEditing(worker: Worker) {
    worker.isEditing = true;
  }

  cancelEditing(worker: Worker) {
    worker.isEditing = false;
    // TODO: revert changes if necessary
  }
  
  saveChanges(worker: Worker) {
    this.agencyService.saveWorkerChanges(worker).subscribe(res =>{
      if(res['message'] = 'update made') alert('Changes saved!')
      else alert('Saving changes failed!');
    });
    worker.isEditing = false;
  }

  
  deleteWorker(worker: Worker) {
    this.agencyService.deleteWorker(worker).subscribe(res=>{
      if (res['message'] == 'delete made') {
        alert('Worker deleted!');
        window.location.reload();
      }
      else alert('Delete failed!');
    })    
  }

  addWorker() {
    if (this.workers.length == this.maxNumberOfWorkers){
      alert('You can only add '+this.maxNumberOfWorkers+' workers.');
      return;
    }
    const modalRef = this.modalService.open(AddWorkerModalComponent);
    modalRef.result.then((worker) => {
      if (worker) {
        worker.agencyUsername = this.loginService.getUser().username;

        this.agencyService.addWorker(worker).subscribe(res =>{
          if(res['message'] == 'worker added') window.location.reload();
          else alert('Adding a worker failed!');
        })
      }
    });
  }

  async requestExpansion() {
    // Implement the function to request an expansion of the maximum number of workers.
    // If you're working with an API, this would probably involve making a POST request.

    let alreadyRequested = await firstValueFrom(this.agencyService.alreadyRequestedExpansion(this.agencyUsername));

    if (alreadyRequested !== null) {
      alert("You already made a request!")
    }
    else{
      this.agencyService.makeRequestForWorker(this.agencyUsername, this.defaultNumberForRequest).subscribe(res => {
        if (res['message'] == 'request made') alert("Request made!");
        else alert("Error in making of a request!")
      })
    }
  }

  
}
