import { Component, OnInit  } from '@angular/core';
import { Agency } from '../models/agency';
import { ActivatedRoute } from '@angular/router';
import { AgencyService } from '../services/agency.service';

@Component({
  selector: 'app-agency-details',
  templateUrl: './agency-details.component.html',
  styleUrls: ['./agency-details.component.css']
})
export class AgencyDetailsComponent implements OnInit{
  
  constructor(private route: ActivatedRoute, private agencyService:AgencyService) { }

  agency:Agency;
  agencyUsername:String;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.agencyUsername = params['username'];
      // Fetch agency details using the agencyId
      // Assign the fetched agency details to the 'agency' property

      

      //this.agency = await firstValueFrom(this.agencyService.getAgencyByUsername(this.agencyUsername));
      this.agencyService.getAgencyByUsername(this.agencyUsername).subscribe((resp:Agency) =>{
        this.agency = resp;
        console.log('Retrieved agency:', this.agency);
      })
      
    });

    

    
  }

  
} 
