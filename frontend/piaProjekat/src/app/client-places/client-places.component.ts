import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../models/place';
import { PlaceService } from '../services/place.service';

@Component({
  selector: 'app-client-places',
  templateUrl: './client-places.component.html',
  styleUrls: ['./client-places.component.css']
})
export class ClientPlacesComponent implements OnInit{
  
  constructor(private route:ActivatedRoute,private placeService:PlaceService) { }

  clientUsername:string;
  clientPlaces:Place[];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientUsername = params['clientUsername'];

      this.getAllClientPlaces(this.clientUsername);
    })
  }

  getAllClientPlaces(clientUsername){
    this.placeService.getAllClientPlaces(clientUsername).subscribe((places:Place[])=>{
      this.clientPlaces = places;
    });
  }

}
