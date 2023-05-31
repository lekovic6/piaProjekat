import { Component, OnInit } from '@angular/core';
import { Agency } from '../models/agency';
import { AgencyService } from '../services/agency.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
 
  constructor(private agencyService:AgencyService) { }

  //username: string;
  allAgencies:Agency[];
  showingAgencies:Agency[];
  filterParam:string;

  ngOnInit(): void {
    // logged user data - if not logged empty data
    //const loggedUser = JSON.parse(localStorage.getItem('user') || '{}');
    //this.username = loggedUser.username;

    // dohv sve agencije
    this.getAllAgencies();
  }

  // pattern for -> [src] = 'data:' + defaultBade64ContentType + ';base64,' + defaultBase64Data

  getAllAgencies(){
    this.agencyService.getAllAgencies().subscribe((agencies:Agency[]) =>{
      this.allAgencies = agencies;
      this.showingAgencies = this.allAgencies;
    });
  }

  filterByNameOrAdress(){
    this.showingAgencies = this.allAgencies.filter(agency=>agency.agencyName.toLowerCase().includes(this.filterParam.toLowerCase()) || 
      agency.agencyAdress.toLowerCase().includes(this.filterParam.toLowerCase()));
  }

  sortByNameAscending() {
    this.showingAgencies.sort((a, b) => a.agencyName.localeCompare(b.agencyName));
  }

  sortByNameDescending() {
    this.showingAgencies.sort((a, b) => b.agencyName.localeCompare(a.agencyName));
  }

  sortByAdressAscending() {
    this.showingAgencies.sort((a, b) => a.agencyAdress.localeCompare(b.agencyAdress));
  }

  sortByAdressDescending() {
    this.showingAgencies.sort((a, b) => b.agencyAdress.localeCompare(a.agencyAdress));
  }

  sort(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    switch (value) {
        case 'name-asc':
            this.sortByNameAscending();
            break;
        case 'name-desc':
            this.sortByNameDescending();
            break;
        case 'adress-asc':
            this.sortByAdressAscending();
            break;
        case 'adress-desc':
            this.sortByAdressDescending();
            break;
    }
}

}
