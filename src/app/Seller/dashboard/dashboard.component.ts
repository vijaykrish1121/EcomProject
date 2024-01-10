import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';
import { data, error, event } from 'jquery';
import { OnInit } from '@angular/core';
import { inject, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private offcanvasService = inject(NgbOffcanvas);

  ngOnInit(): void {
    this.checkSession()
  }
  loginStatus=false
  showCarousel=true
   productList:boolean=false;
   verifiedLists:any=[]
   seller:any
   products=false
   body=true
  constructor(private apiService:ApiService,private routes:Router){}
 public isCollapsed=true
 approvals:any=[]
 kycVerified=false
 checkProfile=false
 final:any=[]
 mobileApprovals:any=[]
 dressApprovals:any=[]
 mobileUnSoldedProducts:any=[]
 unSoldView:boolean=false
 mobileSoldedProducts:any=[]
 soldView:boolean=false
 dressSoldedProducts:any=[]
//  approvedProducts:any=[]
//  unApprovedProducts:any=[]
//  rejectedProducts:any=[]
total:number=0
mobileGrandTotal:number=0
dressGrandTotal:number=0
detail:any=[]
logout() {
  sessionStorage.removeItem('seller')
   this.loginStatus= false
}
  login(){
    this.routes.navigate(['login'])
    this.loginStatus=true
   
  }

checkSession(){
  this.seller=sessionStorage.getItem('seller') ||''
if(this.seller==''){
  this.loginStatus=false
}
else
this.loginStatus=true

}
  onClickView(option:string){
    if(option=='add'){
      this.products=false
      this.body=true
    }
    else
    this.body=false
  
  }
  checkKyc(){
      if(this.seller!=''){
        let seller=sessionStorage.getItem('seller') ||''
        this.apiService.filterApiDatas(ApiUrls.userApi,'userStatus=seller&phoneNum=',seller).subscribe((response)=>{
          this.detail=response
          for(let details of this.detail){
            if(details.kycStatus==true){ 
        this.kycVerified=true
              this.apiService.filterApiDatas(ApiUrls.sellerDetailsApi,'KycStatus=approved&sellerId=',this.seller).subscribe((response:any)=>
              {
               console.log(response);
               
             this.verifiedLists=response
              },
             
              )
      }
      else
      alert('verify Kyc and continue'),
    this.routes.navigate(['/sellerRegister'])
      } 
        })
      }       
  }
    profile(content: TemplateRef<any>){
      if(this.seller!=''){
        let seller=sessionStorage.getItem('seller') ||''
        this.apiService.filterApiDatas(ApiUrls.userApi,'userStatus=seller&phoneNum=',seller).subscribe((response)=>{
          this.detail=response
          for(let details of this.detail){
            if(details.kycStatus==true){
              this.offcanvasService.open(content, { position: 'end' });
        this.checkProfile=true
           this.productList=false
              this.apiService.filterApiDatas(ApiUrls.sellerDetailsApi,'KycStatus=approved&sellerId=',this.seller).subscribe((response:any)=>
              {
               console.log(response);
             this.verifiedLists=response
               
              },
            error=>{
              alert('verify kyc')
            }
              ) 
          }
          else
          alert('verify Kyc and continue'),
        this.routes.navigate(['/sellerRegister'])
          } 
            })
       }   
       else
       alert('Login and continue'),
      this.routes.navigate(['login']) 
    }

    approvedLists(){
      this.apiService.filterApiDatas(ApiUrls.sellerDetailsApi,'KycStatus=approved&sellerId=',this.seller).subscribe((response:any)=>
      {
        this.verifiedLists=response
      }
      )
    }
  
     approvedProduct(event:MouseEvent){
      if(this.seller!=''){
      if(event.target===event.currentTarget ){
     this.productList=true
     this.body=false
          this.apiService.filterApiDatas(ApiUrls.mobileApi,'status=approved&sellerId=',this.seller).subscribe((response)=>
          {
          
            this.mobileApprovals=response
            console.log(response);
          })
          this.apiService.filterApiDatas(ApiUrls.dressApi,'status=approved&sellerId=',this.seller).subscribe((response)=>
          {
            this.dressApprovals=response
            console.log(response); 
            
          })
         
          
          }
         else
          this.productList=false
      }
      else
      alert('complete kyc or Login and Continue')
    }
     unApprovedProduct(event:MouseEvent){
      if(this.seller!=''){
        if(event.target===event.currentTarget ){
       this.productList=true
       this.body=false
            this.apiService.filterApiDatas(ApiUrls.mobileApi,'status=unApproved&sellerId=',this.seller).subscribe((response)=>
            {
           
              this.mobileApprovals=response
              console.log(response);
            })
            this.apiService.filterApiDatas(ApiUrls.dressApi,'status=unApproved&sellerId=',this.seller).subscribe((response)=>
            {
              this.dressApprovals=response
              console.log(response); 
              
            })
           
            
            }
           else
            this.productList=false
        }
        else
        alert('complete kyc or Login and Continue')
      
    }
     rejectedProduct(event:MouseEvent){
      if(this.seller!=''){
      if(event.target===event.currentTarget){
     this.productList=true
     this.body=false
     this.apiService.filterApiDatas(ApiUrls.mobileApi,'status=rejected&sellerId=',this.seller).subscribe((response)=>
     {
     
       this.mobileApprovals=response
       console.log(response);
     })
     this.apiService.filterApiDatas(ApiUrls.dressApi,'status=rejected&sellerId=',this.seller).subscribe((response)=>
     {
       this.dressApprovals=response
       console.log(response); 
       
     })
     }
    
    else
    this.productList=false
    }
    else
    alert('complete kyc')
  }
  unSoldProducts(){
    this.unSoldView=true
    this.body=false
    this.apiService.filterApiDatas(ApiUrls.mobileApi,'status=approved&sellerId=',this.seller).subscribe((response:any)=>
    {
    this.mobileUnSoldedProducts=response
    console.log(response);
    
    }
    ) 
    }
    soldProducts(){
      this.soldView=true
      this.body=false
      this.apiService.filterApiDatas(ApiUrls.mobileApi,'status=approved&sellingStatus=sold&sellerId=',this.seller).subscribe((response:any)=>
      {
      this.mobileSoldedProducts=response
      console.log(response);
      for(let price of this.mobileSoldedProducts){
        this.mobileGrandTotal+=Number(price.soldQuantity)*Number(price.mobilePrize)
        // this.apiService.putApiData(ApiUrls.sellerDetailsApi)
      }
      }
      ) 
      this.apiService.filterApiDatas(ApiUrls.dressApi,'status=approved&&sellingStatus=sold&&sellerId=',this.seller).subscribe((response:any)=>
      {
      this.dressSoldedProducts=response
      console.log(response);
      for(let price of this.dressSoldedProducts){
        this.dressGrandTotal+=Number(price.quantity)*Number(price.productPrize)
      }
      
      }
      ) 
      
      }
   
}
