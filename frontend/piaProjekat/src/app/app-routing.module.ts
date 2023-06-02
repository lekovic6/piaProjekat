import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { AgencyComponent } from './agency/agency.component';
import { AgencyDetailsComponent } from './agency-details/agency-details.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { ClientPlacesComponent } from './client-places/client-places.component';
import { AddPlaceComponent } from './add-place/add-place.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AgencyProfileComponent } from './agency-profile/agency-profile.component';
import { AgencyWorkersComponent } from './agency-workers/agency-workers.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'loginUser', component:LoginUserComponent},
  {path: 'loginAdmin', component:LoginAdminComponent},
  {path: 'registration', component:RegistrationComponent},
  {path: 'clientProfile/:username', component:ClientProfileComponent},// ne znam sta da radim za ovo jer ovaj client path je zapravo home path tkd mi client ne treba
  {path: 'clientPlaces/:clientUsername', component:ClientPlacesComponent},
  {path: 'addPlace', component:AddPlaceComponent},
  {path: 'placeDetails/:idPlace', component:PlaceDetailsComponent},
  {path: 'changePassword', component:ChangePasswordComponent},

  {path: 'agencyProfile/:username', component:AgencyProfileComponent},
  {path: 'agencyWorkers', component:AgencyWorkersComponent},

  {path: 'agency', component:AgencyComponent},// ovo cu da prebacim u pocentu agencije sto ce da budu jobs ja msm
  
  {path: 'agencyDetails/:username', component: AgencyDetailsComponent} // ovo bi trebao da bude kao agencyHome al ne znam ni sta je njima home zapravo 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
