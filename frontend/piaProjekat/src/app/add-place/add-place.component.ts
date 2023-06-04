import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../services/place.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css']
})
export class AddPlaceComponent implements OnInit {

  constructor(private placeService: PlaceService, private loginService: LoginService) { }

  ownerUsername: string;
  type: string;
  address: string;
  numberOfRooms: number = 1;
  area: number;

  ngOnInit(): void {
    this.ownerUsername = this.loginService.getUser().username;
  }

  addPlace() {

    if (this.type && this.address && this.numberOfRooms && this.area) {
      // Create new place object and save it to the database
      this.placeService.addPlace(this.ownerUsername, this.type, this.address, this.numberOfRooms, this.area).subscribe(res => {
        if (res['message'] == 'place added') alert('New place successfully added!')
        else alert(res['message']);
      })
      // Reset form inputs
      this.type = '';
      this.address = '';
      this.numberOfRooms = null;
      this.area = null;
    } else {
      // Display error or show validation messages
      alert('Please fill in all required fields.');
    }
  }
}
