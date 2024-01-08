import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { NavBarComponent } from './user/navBar/navBar.component';
import { ContactUsComponent } from './user/contactUs/contactUs.component';
import { FooterComponent } from './user/footer/footer.component';
import { SellerRegistrationComponent } from './Seller/seller-registration/seller-registration.component';
import { DashboardComponent } from './Seller/dashboard/dashboard.component';
import { AddproductComponent } from './Seller/addproduct/addproduct.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { SellerProfileComponent } from './Seller/seller-profile/seller-profile.component';
import { AddAccountComponent } from './Admin/Accounts/add-account/add-account.component';
import { MobileApprovalsComponent } from './Admin/Approvals/mobile-approvals/mobile-approvals.component';
import { DressApprovalsComponent } from './Admin/Approvals/dress-approvals/dress-approvals.component';
import { ViewProductComponent } from './user/view-product/view-product.component';
import { CheckoutComponent } from './user/checkout/checkout.component';
import { PaymentComponent } from './Seller/payment/payment.component';
import { PendingPaymentsComponent } from './Admin/pending-payments/pending-payments.component';
import { TranscationComponent } from './Admin/transcation/transcation.component';
import { ViewDressproductComponent } from './user/view-dressproduct/view-dressproduct.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'navbar',component:NavBarComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'footer',component:FooterComponent},
  {path:'sellerRegister',component:SellerRegistrationComponent},
  {path:'sellerDashboard',component:DashboardComponent},
  {path:'addProduct',component:AddproductComponent},
  {path:'adminDashboard',component:AdminDashboardComponent},
  {path:'sellerProfile',component:SellerProfileComponent},
  {path:'addAccount',component:AddAccountComponent},
  {path:'mobile',component:MobileApprovalsComponent},
  {path:'dress',component:DressApprovalsComponent},
  {path:'viewProduct',component:ViewProductComponent},
  {path:'checkOut',component:CheckoutComponent},
  {path:'sellerPayment',component:PaymentComponent},
  {path:'pendingPayments',component:PendingPaymentsComponent},
  {path:'transcation',component:TranscationComponent},
  {path:'viewDressProduct',component:ViewDressproductComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
