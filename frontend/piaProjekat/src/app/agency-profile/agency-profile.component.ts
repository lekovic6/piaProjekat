import { Component, OnInit } from '@angular/core';
import { AgencyService } from '../services/agency.service';
import { ActivatedRoute } from '@angular/router';
import { Agency } from '../models/agency';
import { ProfilePicture } from '../models/profilePicture';
import { Observable, ReplaySubject } from 'rxjs';
import { Worker } from '../models/worker';

@Component({
  selector: 'app-agency-profile',
  templateUrl: './agency-profile.component.html',
  styleUrls: ['./agency-profile.component.css']
})
export class AgencyProfileComponent implements OnInit{
  
  constructor(private route: ActivatedRoute, private agencyService:AgencyService){ }
  
  username:string;
  password:string;
  email:string;
  agencyName:string;
  agencyAdress:string;
  tid:string;
  description:string;
  profilePicture:ProfilePicture;
  maxNumberOfWorkers:number;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      
      this.agencyService.getAgencyByUsername(this.username).subscribe((agency:Agency) =>{
        this.password = agency.password;
        this.email = agency.email;
        this.agencyName = agency.agencyName;
        this.agencyAdress = agency.agencyAdress;
        this.tid = agency.tid;
        this.description =agency.description;
        this.profilePicture = agency.profilePicture;

        this.maxNumberOfWorkers = agency.maxNumberOfWorkers;
      });
    })
  }

  dimensionErrorFlag:boolean = false;
  dimensionErrorMassage:string;
  async dimensionValidator(file): Promise<boolean> {
    const img = new Image();
    img.src = window.URL.createObjectURL(file);
  
    return new Promise((resolve) => {
      img.onload = () => {
        const width = img.naturalWidth;
        const height = img.naturalHeight;
  
        window.URL.revokeObjectURL(img.src);
  
        if (width < 100 || width > 300 || height < 100 || height > 300) {
          this.dimensionErrorMassage =
            'Invalid dimensions. Image dimensions should be between 100x100 and 300x300 pixels.';
          this.dimensionErrorFlag = true;
          resolve(false);
        } else {
          this.dimensionErrorMassage = null;
          this.dimensionErrorFlag = false;
          resolve(true);
        }
      };
    });
  }
  
  async onFileChange(event) {
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      const isValidDimensions = await this.dimensionValidator(file);
  
      if (isValidDimensions) {
        this.convertFileToBase64(file).subscribe((base64) => {
          this.profilePicture.data = base64;
        });

        if (file) {
          this.profilePicture.contentType = file.type;
        }
      }
    }
  }

  convertFileToBase64(file : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) => result.next(btoa(event.target.result.toString()));
    return result;
  }

  updateDetails(){
    this.agencyService.updateAgency(this.username, this.agencyName, this.agencyAdress, this.tid, this.description, this.profilePicture.data, this.profilePicture.contentType).subscribe(res =>{
      if (res['message'] = 'update made')
        alert('Details updated!');
      else
        alert('Update failed');
    });
  }
}
