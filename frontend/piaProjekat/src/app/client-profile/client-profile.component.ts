import { Component, OnInit } from '@angular/core';
import { ProfilePicture } from '../models/profilePicture';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../services/client.service';
import { User } from '../models/user';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit{

  constructor(private route: ActivatedRoute, private clientService:ClientService) { }

  username:string;
  firstname:string;
  lastname:string;
  email:string;
  password:string;
  phoneNumber:string;
  profilePicture:ProfilePicture;

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
          resolve(false);
        } else {
          this.dimensionErrorMassage = null;
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

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      
      this.clientService.getClientByUsername(this.username).subscribe((user:User) =>{
        this.firstname = user.firstname;
        this.lastname = user.lastname;
        this.email = user.email;
        this.password = user.password;
        this.phoneNumber = user.phoneNumber;
        this.profilePicture = user.profilePicture;
      });
    })
  }

  updateDetails(){
    this.clientService.updateClient(this.username, this.firstname, this.lastname, this.password, this.phoneNumber, this.profilePicture.data, this.profilePicture.contentType).subscribe(res =>{
      if (res['message'] = 'update made')
        alert('Details updated!');
      else
        alert('Update failed');
    });
  }
}
