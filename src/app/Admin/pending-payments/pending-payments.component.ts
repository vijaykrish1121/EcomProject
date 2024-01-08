import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';
import { OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ViewEncapsulation,TemplateRef,inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pending-payments',
  templateUrl: './pending-payments.component.html',
  styleUrls: ['./pending-payments.component.scss']
})
export class PendingPaymentsComponent implements OnInit {
  private modalService=inject(NgbModal)
  constructor(private apiService:ApiService,private routes:Router){}
pendingList:any=[]
adminAcc:any=[]
pin:string=''
saleHistory:any=[]
sellerDetails:any=[]
saleHistory1:any=[]
  ngOnInit(): void {
   this.pendingPayments()
  }
  pendingPayments(){
    this.apiService.filterApi(ApiUrls.saleHistoryApi,'FundRelesed=unpaid').subscribe((response)=>{
      this.pendingList=response
    })
  }
  viewPasswordPage(content:TemplateRef<any>){
      this.modalService.open(content, { centered:true });
    
  }
  releseFund(id:any){
    this.apiService.filterApi(ApiUrls.adminAccApi,'id=2').subscribe((response)=>{
      this.adminAcc=response
      console.log(this.adminAcc); 
      this.apiService.filterApiDatas(ApiUrls.saleHistoryApi,'id=',id).subscribe((response)=>{
           this.saleHistory=response
           console.log(this.saleHistory);
           for(let admin of this.adminAcc){
            if(this.pin==admin.pinNo){
            for(let history of this.saleHistory){
               admin.balance=Number(admin.balance)-Number(history.totalCost)
             this.apiService.putApiData(ApiUrls.adminAccApi,2,admin).subscribe((response)=>{
              console.log(response);
              history.FundRelesed="paid"
              this.apiService.putApiData(ApiUrls.saleHistoryApi,id,history).subscribe((response)=>{
                console.log(response);
                this.pendingPayments()   
              //deposit fund to seller account
              this.apiService.filterApiDatas(ApiUrls.sellerDetailsApi,'sellerId=',history.sellerId).subscribe((response:any)=>{
                 this.sellerDetails=response
                 console.log(this.sellerDetails); 
                for(let seller of this.sellerDetails ){
                  seller.balance=Number(seller.balance)+Number(history.totalCost)
                  this.apiService.putApiData(ApiUrls.sellerDetailsApi,seller.id,seller).subscribe((response:any)=>{
                    console.log(response);
                    let paidPayment={
                      sellerId:history.sellerId,
                      quantity:history.quantity,
                    totalCost:history.totalCost,
                      productName:history.productName,
                      specification:history.specification,
                     mobileColour:history.mobileColour,
                     timeStamp:history.timeStamp,
                     customerId:history.customerId,
                     FundRelesed:history.FundRelesed
                    }
                    this.apiService.postAPiData(ApiUrls.paymentHistoryApi,paidPayment).subscribe((response)=>{
                      console.log(response);
                      
                    })
                    alert('fund relesed')
                  })
                }
              })
              })
             })  
            }
           } 
           else
           alert('pin not matched')
          }
      })
  })
  }
   fundTransferseller(){
    this.apiService.getApiData(ApiUrls.saleHistoryApi).subscribe((response)=>{
      this.saleHistory1=response
      for(let history of this.saleHistory1){
        let paidPayment={
          sellerId:history.sellerId,
          quantity:history.quantity,
        totalCost:history.totalCost,
          productName:history.productName,
          specification:history.specification,
         mobileColour:history.mobileColour,
         timeStamp:history.timeStamp,
         FundRelesed:history.FundRelesed
        }

      }
    })
   }
}
