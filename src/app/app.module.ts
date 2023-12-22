import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './user/home/home.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './user/navBar/navBar.component';
import { LogoutComponent } from './user/logout/logout.component';
import { ContactUsComponent } from './user/contactUs/contactUs.component';
import { FooterComponent } from './user/footer/footer.component';
import { SellerRegistrationComponent } from './Seller/seller-registration/seller-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import { AddproductComponent } from './Seller/addproduct/addproduct.component';
import { AdminRegisterComponent } from './Admin/admin-register/admin-register.component';
import { DashboardComponent } from './Seller/dashboard/dashboard.component';
import { AppravolComponent } from './Admin/appravol/appravol.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { SellerProfileComponent } from './Seller/seller-profile/seller-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavBarComponent,
    LogoutComponent,
    ContactUsComponent,
    FooterComponent,
    SellerRegistrationComponent,
    AddproductComponent,
    AdminRegisterComponent,
    DashboardComponent,
    AppravolComponent,
    AdminDashboardComponent,
    SellerProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
