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
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'navbar',component:NavBarComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'footer',component:FooterComponent},
  {path:'sellerRegister',component:SellerRegistrationComponent},
  {path:'sellerDashboard',component:DashboardComponent},
  {path:'addProduct',component:AddproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
