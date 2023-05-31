import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ClientProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
