import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router, RouterLink } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';
import { ViewEncapsulation,TemplateRef,inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-mobile-approvals',
  templateUrl: './mobile-approvals.component.html',
  styleUrls: ['./mobile-approvals.component.scss']
})
export class MobileApprovalsComponent implements OnInit {
  private modalService=inject(NgbModal)
  constructor(private apiService:ApiService,private routes:Router){}
  approvals:any=[];
  changedApproval:any;
  final:any=[];
  mobileDetail:any=[]
  viewDetail=false
  adminAccounts:any=[]
  sellerAccountDetail:any=[]
   viewPayment:boolean=false
   viewProduct:boolean=true
   pinPage:boolean=false
   typedPin:string=''
   accNo:string=''
ngOnInit(): void {
  this.loadApprovalData()
}

loadApprovalData(){
  this.apiService.filterApi(ApiUrls.mobileApi,'status=unApproved').subscribe((records:any)=>
  {
    console.log(records);
    this.approvals=records

  });
}
deleteProduct(id:number){
  this.apiService.deleteApiData(ApiUrls.mobileApi,id).subscribe((datas)=>
  {
   console.log(datas);
   
  })
}

approveProduct(record: any){
  record.status = 'approved';
  this.apiService.putApiData(ApiUrls.mobileApi,record.id,record).subscribe(
    (response)=>{
      console.log(response);
      this.loadApprovalData();
  },error => {
    console.log(error);
  });
}

rejectProduct(record:any){
    record.status='rejected';
   
    this.apiService.putApiData(ApiUrls.mobileApi,record.id,record).subscribe((response:any)=>
    {
    console.log(response);
    this.loadApprovalData()
    },error=>{
      console.log(error);
      
    }
    )
}
 
 viewFullDetail(id:number,content:TemplateRef<any>){
  this.modalService.open(content, { size:'xl', scrollable: true });
  this.apiService.filterApiDatas(ApiUrls.mobileApi,'id=',id).subscribe((response:any)=>
  {
    this.mobileDetail=response
    this.viewDetail=true
    // this.viewProduct=false
    console.log(this.mobileDetail);
    
  }
  )
     
 }
 payment(sellerId:any){
     this.viewPayment=true
     this.viewDetail=false  
     this.apiService.getApiData(ApiUrls.adminAccApi).subscribe((response:any)=>
     {
      this.adminAccounts=response
     }
     )
     this.apiService.filterApiDatas(ApiUrls.sellerDetailsApi,'KycStatus=approved&userId=',sellerId).subscribe((response)=>
     {
      this.sellerAccountDetail=response
      console.log(this.sellerAccountDetail);
      
     }
     )
    
 }
 password(){
  this.viewPayment=false
  this.pinPage=true
 }
 checkPassword(){
  this.apiService.filterApiDatas(ApiUrls.adminAccApi,'accNo=',this.accNo).subscribe((response:any)=>
  {
   this.adminAccounts=response
   for(let acc of this.adminAccounts){
    if(this.typedPin==acc.pinNo){
    alert('payment Sucessful')
    }
    else
    alert('pin not matched')
   }
  }
  )
  
 
 }

}
