import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';
import { data, event } from 'jquery';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
   
  }
   productList:boolean=false;


  constructor(private apiService:ApiService,private routes:Router){}
 public isCollapsed=true
 approvals:any=[]
 kycVerified=false
//  approvedProducts:any=[]
//  unApprovedProducts:any=[]
//  rejectedProducts:any=[]

  checkSession(){
    let val=sessionStorage.getItem('user') || ''
    if(val==""){
      alert('Complete KYC')
      this.routes.navigate(['sellerRegister'])
    }
    else
    this.kycVerified=true

  }


     approvedProduct(event:MouseEvent){
      if(event.target===event.currentTarget){
     this.productList=true
           this.apiService.getApiData(ApiUrls.addProductApi).subscribe((response:any)=>
           {
            console.log(response);
            
              this.approvals=response.filter((datas:any)=>datas.status=='approved')
              console.log(this.approvals);
              
           }
           )
          }
          else
          this.productList=false
    }
     unApprovedProduct(event:MouseEvent){
      if(event.target===event.currentTarget){
      this.productList=true
      this.apiService.getApiData(ApiUrls.addProductApi).subscribe((response:any)=>
      {
        this.approvals=response.filter((datas:any)=>datas.status=='unApproved')
        console.log(this.approvals);
        
      }
      )
    }
    else
    this.productList=false
    }
     rejectedProduct(event:MouseEvent){
      if(event.target===event.currentTarget){
     this.productList=true
      this.apiService.getApiData(ApiUrls.addProductApi).subscribe((response:any)=>
      {
        this.approvals=response.filter((datas:any)=>datas.status=='rejected')
        console.log(this.approvals);
        
      }
      )
     }
    
    else
    this.productList=false
    }
   
}
