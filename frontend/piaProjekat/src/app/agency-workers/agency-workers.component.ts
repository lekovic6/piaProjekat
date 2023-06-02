import { Component, OnInit } from '@angular/core';
import { Worker } from '../models/worker';
import { AgencyService } from '../services/agency.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-agency-workers',
  templateUrl: './agency-workers.component.html',
  styleUrls: ['./agency-workers.component.css']
})
export class AgencyWorkersComponent implements OnInit{
  
  constructor(private agencyService:AgencyService, private loginService:LoginService){ }
  
  workers:Worker[];
  maxNumberOfWorkers:number;
  agencyUsername:string;
  ngOnInit(): void {
    this.maxNumberOfWorkers = this.loginService.getUser().maxNumberOfWorkers;
    this.agencyUsername = this.loginService.getUser().username;
    this.agencyService.getAgencyWorkers(this.agencyUsername).subscribe((workers:Worker[])=>{
      this.workers = workers;
      this.workers.forEach(worker => worker.isExpanded = false);

      // to do
    });
  }


  toggleWorkerDetails(worker: Worker) {  // Add this method
    worker.isExpanded = !worker.isExpanded;
  }

}
