import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';
import { OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
isCollapsed=false
productApproval=false;
viewDetail=false
kycApprovals=false
approval:any=[]
particularDetail:any=[]
details:any=[]

constructor(private apiService:ApiService,private routes:Router){}
onClickView(option:string){
   if(option=='add'){
    this.productApproval=true
   }
   else
   this.productApproval=false
}


  ngOnInit(): void {
    // this.sellerPersonalDetails()
    // this.sellerCompanyDetails()
    // this.sellerBankDetails()
  }

sellerDetails(){
 
  this.apiService.getApiData(ApiUrls.sellerDetailsApi).subscribe((response:any)=>
  {
       this.details=response.filter((datas:any)=>datas.KycStatus =='pending'
    )
    console.log(this.details);
    this.kycApprovals=true
  }
  )

}
viewDetails(id:number){

  this.apiService.getApiData(ApiUrls.sellerDetailsApi).subscribe((response:any)=>
  {

  this.particularDetail=response.filter((datas:any)=>datas.id==id)
    console.log(response);
    this.viewDetail=true
  }
  )
  
}
approveSellerDetails(detail:any){
   detail.KycStatus='approved' 
   this.apiService.putApiData(ApiUrls.sellerDetailsApi,detail.id,detail).subscribe((response:any)=>
   {
    console.log(response);
    this.sellerDetails()
   }
   )    
}
   rejectSellerDetails(detail:any){
    detail.KycStatus='rejected' 
    this.apiService.putApiData(ApiUrls.sellerDetailsApi,detail.id,detail).subscribe((response:any)=>
    {
     console.log(response);
     this.sellerDetails()
    }
    )   
   }
}
