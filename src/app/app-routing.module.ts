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
import { AppravolComponent } from './Admin/appravol/appravol.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { SellerProfileComponent } from './Seller/seller-profile/seller-profile.component';
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
  {path:'approval',component:AppravolComponent},
  {path:'adminDashboard',component:AdminDashboardComponent},
  {path:'sellerProfile',component:SellerProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
