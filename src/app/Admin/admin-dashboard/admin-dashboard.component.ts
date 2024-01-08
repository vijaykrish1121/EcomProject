import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';
import { OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ViewEncapsulation,TemplateRef,inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  private modalService=inject(NgbModal)
 
isCollapsed=false
productApproval=false;
viewDetail=false
kycApprovals=false
approval:any=[]
particularDetail:any=[]
details:any=[]
products:any=[]
admin:any=[]
details1:any=[]

constructor(private apiService:ApiService,private routes:Router){}
onClickView(option:any){
   if(option=='add'){
    this.productApproval=true
   }
   else
   this.productApproval=false
}

// openVerticallyCentered(content: TemplateRef<any>) {
//   this.modalService.open(content, { centered: true });
// }
  ngOnInit(): void {
 this.checkSession()
 
  }
  checkSession(){
    this.admin=sessionStorage.getItem('admin')||''
    if(this.admin==''){
      alert('login and continue')
    this.routes.navigate(['login'])
    }
  }

sellerDetails(content:TemplateRef<any>){
  this.modalService.open(content, { fullscreen:true });
  this.apiService.filterApi(ApiUrls.sellerDetailsApi,'KycStatus=pending').subscribe((response:any)=>
  {
        this.details=response
    console.log(this.details);
    this.kycApprovals=true
    this.viewPendingDetails()
  }
  )
}
viewPendingDetails(){
  this.apiService.filterApi(ApiUrls.sellerDetailsApi,'KycStatus=pending').subscribe((response:any)=>
  {
        this.details=response
    
  }
  )
}
viewDetails(id:number,content:TemplateRef<any>){
  this.modalService.open(content, { size:'xl' });
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
    this.apiService.filterApiDatas(ApiUrls.userApi,"phoneNum=",detail.sellerId).subscribe((response)=>{
      this.details1=response
      for(let detail1 of this.details1){
        detail1.kycStatus=true
        this.apiService.putApiData(ApiUrls.userApi,detail1.id,detail1).subscribe((response:any)=>
   {
     console.log(response);
     
   })
      }
    })
    this.viewPendingDetails()
   }
   )    
}
   rejectSellerDetails(detail:any){
    detail.KycStatus='rejected' 
    this.apiService.putApiData(ApiUrls.sellerDetailsApi,detail.id,detail).subscribe((response:any)=>
    {
     console.log(response);
   
    this.viewPendingDetails()
    }
    )   
   }

   viewMobiles(){
   this.apiService.filterApi(ApiUrls.addProductApi,'product=mobile&status=approved').subscribe((response)=>
   {
        this.products=response
   }
   )
   }
   viewDresses(){
    this.apiService.filterApi(ApiUrls.addProductApi,'product=dress&status=approved').subscribe((response)=>
    {
         this.products=response
    }
    )
    }
    onClickViewAcc(content:TemplateRef<any>){
      this.modalService.open(content, { size:'xl' });
    }


}
