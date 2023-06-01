import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaceService } from '../services/place.service';
import { Place } from '../models/place';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit{
  
  constructor(private route: ActivatedRoute, private placeService:PlaceService) { }

  idPlace:string;
  ownerUsername:string;
  type:string;
  address:string;
  numberOfRooms:number;
  area:number;
  // plus canvas dodat usrani

  ngOnInit(): void {  
    this.route.params.subscribe(params => {
      this.idPlace = params['idPlace'];
      this.getPlaceById(this.idPlace);
    })
  }

  getPlaceById(idPlace){
    this.placeService.getPlaceById(idPlace).subscribe((place:Place)=>{
      this.ownerUsername = place.ownerUsername;
      this.type = place.type;
      this.address = place.address;
      this.numberOfRooms = place.numberOfRooms;
      this.area = place.area;
      // plus canvas dodat usrani
    })
  }

  updatePlace(){
    this.placeService.updatePlace(this.idPlace, this.ownerUsername, this.type, this.address, this.numberOfRooms, this.area).subscribe(res=>{
      if(res['message'] == 'place updated') alert('Place updated successfully!');
      else alert('error in update!');
    })
  }

  deletePlace(){
    this.placeService.deletePlace(this.idPlace).subscribe(res=>{
      if(res['message'] == 'place deleted') alert('Place deleted successfully!');
      else alert('error in delete!'); 
    })
  }

}
