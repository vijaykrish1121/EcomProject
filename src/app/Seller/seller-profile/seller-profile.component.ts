import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.scss']
})
export class SellerProfileComponent {
  constructor(private apiservice:ApiService,private router:Router) {}
   personalDetail:any=[]
   companyDetail:any=[]
   bankDetail:any=[]
   getDetails(){
    this.getPersonalDetail(),
    this.getCompanyDetail(),
    this.getBankDetail()
   }
  getPersonalDetail(){
         this.apiservice.getApiData(ApiUrls.SellerPersonaDetailsApi).subscribe((response:any)=>
        {
          this.personalDetail=response.filter((datas:any)=>datas.PhoneNumber==sessionStorage.getItem('user'))
        } 
         )
  }
  getCompanyDetail(){
    this.apiservice.getApiData(ApiUrls.SellerCompanyDetailsApi).subscribe((response:any)=>
   {
     this.companyDetail=response;
   } 
    )
}
getBankDetail(){
  this.apiservice.getApiData(ApiUrls.SellerBankDetailsApi).subscribe((response:any)=>
 {
   this.bankDetail=response;
 } 
  )
}
}
