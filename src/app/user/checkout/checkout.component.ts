import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { error } from 'jquery';
import { inject, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  private modalService = inject(NgbModal);
// checked: boolean=true
  constructor( private apiService:ApiService,private router:Router,private routes:ActivatedRoute,private _formBuilder: FormBuilder){}
 isLinear=false
 user:any
 savedAddress:any=[]
 addresss:any
 deliverAddress:any=[]
 isChecked:boolean=false
value:any
viewDetail:any=[]
quantity:number=0
adminAcc:any=[]
 ngOnInit(): void {
 this.user=sessionStorage.getItem('user') ||''
 this.getAddress()
 this.deliverAddress=this.getAddressDetail()
 }
   getAddress(){
    this.apiService.filterApiDatas(ApiUrls.deliveryAddressApi,'user=',this.user).subscribe((response)=>{
    this.savedAddress=response
    })
   }

   openAddress(content: TemplateRef<any>){
		this.modalService.open(content, { centered: true });
    this.getAddress();
    // if(this.checkfield=false){
        
    //  }
    //  else
    //  this.checkfield=false
   }
   addNewAddress(content: TemplateRef<any>){
		this.modalService.open(content, { scrollable:true, centered: true });
 
   }
  

   getAddressDetail(){
    return new FormGroup({
      fullName:    new FormControl('', [Validators.required]),
      phoneNumber: new  FormControl('',[Validators.required]),
      address:     new FormControl('',[Validators.required]),
      pinCode:     new FormControl('',[Validators.required]),
      detail1:     new FormControl('',[Validators.required]),
      detail2:     new FormControl('',[Validators.required]),
      landMark:    new FormControl('',[Validators.required]),
      town:        new FormControl('',[Validators.required]),
      state:       new FormControl('',[Validators.required]),
    });
  }
   addAddress(){
    if(this.deliverAddress.valid){
    let addressDetails={
      fullName:this.deliverAddress.get('fullName')?.value,
      phoneNumber:this.deliverAddress.get('phoneNumber')?.value,
      address:this.deliverAddress.get('address')?.value,    
      pinCode: this.deliverAddress.get('pinCode')?.value,   
      detail1:this.deliverAddress.get('detail1')?.value,    
      detail2:this.deliverAddress.get('detail2')?.value,    
      landMark:this.deliverAddress.get('landMark')?.value,   
      town: this.deliverAddress.get('town')?.value,      
      state: this.deliverAddress.get('state')?.value, 
      user:this.user    
    }
     this.apiService.postAPiData(ApiUrls.deliveryAddressApi,addressDetails).subscribe((response:any)=>
     {
      console.log(response);
       alert('address saved')
       this.ngOnInit()
     }
     )
    }
    else
    alert('fill all field')
   }
   reviewOrder(){
    this.routes.queryParams.subscribe((response:any)=>
    {
      this.value=response['id']
      this.quantity=response['quantity']
      console.log(this.value);
      console.log(this.quantity);
      this.apiService.filterApiDatas(ApiUrls.mobileApi,'id=',this.value).subscribe((response:any)=>
      {
  this.viewDetail=response
  console.log(this.viewDetail);
  
      }
      )  
    }
    )
   }
   finalPayment(){
    let userid=sessionStorage.getItem('user') ||''
    console.log(this.viewDetail);    
      for(let detail of this.viewDetail){
        let purchaseHistory={
          sellerId:detail.sellerId,
          quantity:this.quantity,
          productName:detail.selectProduct,
          mobileColour:detail.mobileColor,
          specification:detail.mobileRam+detail.mobileStorage,
          customerId:userid,
          customerDeliveryAddress:this.addresss,
          totalCost:Number(this.quantity)*Number(detail.mobilePrize),
          timeStamp: new Date().toString(),
          FundRelesed:'unpaid'
        }
        this.apiService.postAPiData(ApiUrls.saleHistoryApi,purchaseHistory).subscribe((response)=>{
          console.log(response);
          this.apiService.postAPiData(ApiUrls.paymentHistoryApi,purchaseHistory).subscribe((response)=>{
            console.log(response);
            
          })
          
        })
        detail.remainingQuantity=Number(detail.remainingQuantity)-Number(this.quantity)
       detail.sellingStatus='sold'
       detail.soldQuantity=Number(detail.soldQuantity)+Number(this.quantity)
        this.apiService.putApiData(ApiUrls.mobileApi,detail.id,detail).subscribe((response)=>{
          console.log(response);  
            this.toLoadAdminAcc();
          
        })
      }
    alert('order placed sucessfully')
    this.router.navigate(['/'])
   }
   toLoadAdminAcc(){
         this.apiService.filterApi(ApiUrls.adminAccApi,'id=2').subscribe((response)=>{
          console.log(response);
          this.adminAcc=response
          for(let acc of this.adminAcc){
            for(let detail of this.viewDetail){
            acc.balance=Number(acc.balance)+(Number(this.quantity)*Number(detail.mobilePrize))
            this.apiService.putApiData(ApiUrls.adminAccApi,2,acc).subscribe((response)=>{
              console.log(response); 
            })
          }
        }
         })
   }
}
