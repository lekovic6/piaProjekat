import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { AgencyComponent } from './agency/agency.component';
import { AgencyDetailsComponent } from './agency-details/agency-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { ClientPlacesComponent } from './client-places/client-places.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { AddPlaceComponent } from './add-place/add-place.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AgencyProfileComponent } from './agency-profile/agency-profile.component';
import { AgencyWorkersComponent } from './agency-workers/agency-workers.component';
import { AddWorkerModalComponent } from './add-worker-modal/add-worker-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    LoginAdminComponent,
    HomeComponent,
    RegistrationComponent,
    AgencyComponent,
    AgencyDetailsComponent,
    HeaderComponent,
    FooterComponent,
    ClientProfileComponent,
    ClientPlacesComponent,
    PlaceDetailsComponent,
    AddPlaceComponent,
    ChangePasswordComponent,
    AgencyProfileComponent,
    AgencyWorkersComponent,
    AddWorkerModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
