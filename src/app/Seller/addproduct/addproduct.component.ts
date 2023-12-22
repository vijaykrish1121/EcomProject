import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { ApiUrls } from 'src/app/common/apiUrls';
import { ApiService } from 'src/app/service/api.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent {
 constructor(private apiService:ApiService,private routes:Router){}
selectedOption:string='mobile'
  selectProduct:string=''
  mobileModel:string=''
  mobileRam:string=''
  mobileStorage:string=''
  mobileWeight:string=''
  mobileSize:string=''
  productSpecs:string=''
  productSpecs1:string=''
  productSpecs2:string=''
  mobilePrize:string=''
  mobileColor:string=''
  mobileId:string=''
  // productDetails:any=[]
addProduct(){
   console.log(this.selectProduct);
   console.log(this.mobileModel);
   console.log(this.mobileWeight);
   
   let productDetail=
    {
    productSelected:this.selectProduct,
    mobileModel:this.mobileModel,
    mobileRam:this.mobileRam,
    mobileStorage:this.mobileStorage,
    mobileWeight:this.mobileWeight,
    mobileSize:this.mobileSize,
    productSpecs:this.productSpecs,
    mobilePrize:this.mobilePrize,
    mobileColor:this.mobileColor,
    mobileId:this.mobileId,
    status:'unApproved'
    }
    this.apiService.postAPiData(ApiUrls.addProductApi,productDetail).subscribe((response)=>
    {
      console.log('response',response);   
      alert('product submitted')
     this.routes.navigate(['sellerDashboard'])
    }) 
}

}
