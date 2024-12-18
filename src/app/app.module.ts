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
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { SellerProfileComponent } from './Seller/seller-profile/seller-profile.component';
import { MobileApprovalsComponent } from './Admin/Approvals/mobile-approvals/mobile-approvals.component';
import { DressApprovalsComponent } from './Admin/Approvals/dress-approvals/dress-approvals.component';
import {MatSelectModule} from '@angular/material/select';
import { AddAccountComponent } from './Admin/Accounts/add-account/add-account.component';
import { AccountsComponent } from './Admin/Accounts/accounts.component';
import { ProductsComponent } from './Seller/products/products.component';
import { ViewProductComponent } from './user/view-product/view-product.component';
import { CheckoutComponent } from './user/checkout/checkout.component';
import { PaymentComponent } from './Seller/payment/payment.component';
import { PendingPaymentsComponent } from './Admin/pending-payments/pending-payments.component';
import { TranscationComponent } from './Admin/transcation/transcation.component';
import { ViewDressproductComponent } from './user/view-dressproduct/view-dressproduct.component';
import { RejectedProductsComponent } from './Admin/rejected-products/rejected-products.component';
import { AddCartComponent } from './user/add-cart/add-cart.component';
import { SellerNavbarComponent } from './Seller/seller-navbar/seller-navbar.component';
import { CarouselComponent } from "./user/carousel/carousel.component";
import { MobileCardComponent } from "./user/mobile-card/mobile-card.component";
import { DressCardComponent } from "./user/dress-card/dress-card.component";


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
    AdminDashboardComponent,
    SellerProfileComponent,
    MobileApprovalsComponent,
    DressApprovalsComponent,
    AddAccountComponent,
     PaymentComponent,
     AccountsComponent,
     ProductsComponent,
     ViewProductComponent,
     CheckoutComponent,
     PendingPaymentsComponent,
     TranscationComponent,
     ViewDressproductComponent,
     RejectedProductsComponent,
     AddCartComponent,
     SellerNavbarComponent,
     
    
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
    ReactiveFormsModule,
    MatSelectModule,
    CarouselComponent,
    MobileCardComponent,
    DressCardComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
