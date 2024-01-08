import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { ApiUrls } from 'src/app/common/apiUrls';
import { ApiService } from 'src/app/service/api.service';
// import { DashboardComponent } from '/dashboard/dashboard.component';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
     
  ngOnInit(): void {
    let user=  sessionStorage.getItem('seller')||''
    if(user=='')
    {
      alert('login and continue')
      this.routes.navigate(['login'])
    }
    this.mobileDetails=this.getmobileDetails()
    this.dressDetail=this.getDressDetails()
  }
 constructor(private apiService:ApiService,private routes:Router){}
   mobileDetails:any
   dressDetail:any
  selectedOption:string='mobile'
 
  getmobileDetails(){
    return new FormGroup({
      selectProduct:new FormControl('',[Validators.required]),
      mobileModel  :new FormControl('',[Validators.required]),
      mobileRam    :new FormControl('',[Validators.required]),
      mobileStorage:new FormControl('',[Validators.required]),
      mobileWeight :new FormControl('',[Validators.required]),
      mobileSize   :new FormControl('',[Validators.required]),
      os           :new FormControl('',[Validators.required]),
      camera       :new FormControl('',[Validators.required]),
      processor    :new FormControl('',[Validators.required]),
      mobilePrize  :new FormControl('',[Validators.required]),
      mobileBattery:new FormControl('',[Validators.required]),
      choosedColour:new FormControl('',[Validators.required]),
      mobileColour :new FormControl('',[Validators.required]),
      sim          :new FormControl('',[Validators.required]),
      quality      :new FormControl('',[Validators.required]),
      mobileId     :new FormControl('',[Validators.required]),
      mobileOrigin :new FormControl('',[Validators.required]),
      quantity     :new FormControl('',[Validators.required]),

    })
  }
     getDressDetails(){
      return new FormGroup({
        selectGender:new FormControl('',[Validators.required]),
        selectProduct:new FormControl('',[Validators.required]),
        selectProductModel:new FormControl('',[Validators.required]),
        productName:new FormControl('',[Validators.required]),
        dressSize:new FormControl('',[Validators.required]),
        dressColour:new FormControl('',[Validators.required]),
        productId:new FormControl('',[Validators.required]),
        quantity:new FormControl('',[Validators.required]),
        quality:new FormControl('',[Validators.required]),
        itemWeight:new FormControl('',[Validators.required]),
        productOrigin:new FormControl('',[Validators.required]),
        productPrize:new FormControl('',[Validators.required]),

      })
     }

addProduct(){
   let seller=sessionStorage.getItem('seller') ||''
  if(this.mobileDetails.valid){
  let mobileDetail={
    selectProduct:this.mobileDetails.get('selectProduct')?.value,
    mobileModel:this.mobileDetails.get('mobileModel')?.value,
    mobileRam:this.mobileDetails.get('mobileRam')?.value,
    mobileStorage:this.mobileDetails.get('mobileStorage')?.value,
    mobileWeight:this.mobileDetails.get('mobileWeight')?.value,
    mobileSize:this.mobileDetails.get('mobileSize')?.value,
    os:this.mobileDetails.get('os')?.value,
    camera:this.mobileDetails.get('camera')?.value,
    processor:this.mobileDetails.get('processor')?.value,
    mobilePrize:this.mobileDetails.get('mobilePrize')?.value,
    mobileBattery:this.mobileDetails.get('mobileBattery')?.value,
    choosedColour:this.mobileDetails.get('choosedColour')?.value,
    mobileColor:this.mobileDetails.get('mobileColour')?.value,
    sim:this.mobileDetails.get('sim')?.value,
    quality:this.mobileDetails.get('quality')?.value,
    mobileId:this.mobileDetails.get('mobileId')?.value,
    mobileOrigin:this.mobileDetails.get('mobileOrigin')?.value,
    quantity:this.mobileDetails.get('quantity')?.value,
    status:'unApproved',
    sellerId:seller,
    sellingStatus:'unSold',
    soldQuantity:0,
    remainingQuantity:this.mobileDetails.get('quantity')?.value,
    timeStamp: new Date().toString()
  }
  if(this.selectedOption=='mobile'){
    this.apiService.postAPiData(ApiUrls.mobileApi,mobileDetail).subscribe((response)=>
    {
      console.log('response',response);   
      alert('product submitted')
     this.routes.navigate(['sellerDashboard'])
    }) 
  }
}
else
alert('check the field correctly')  
}
addDressDetail(){
  let seller=sessionStorage.getItem('seller') ||''
  if(this.dressDetail.valid){
  let dressDetails={
  selectGender:this.dressDetail.get('selectGender')?.value,
  selectProduct:this.dressDetail.get('selectProduct')?.value,
  selectProductModel:this.dressDetail.get('selectProductModel')?.value,
  productName:this.dressDetail.get('productName')?.value,
  dressSize:this.dressDetail.get('dressSize')?.value,
  dressColour:this.dressDetail.get('dressColour')?.value,
  productId:this.dressDetail.get('productId')?.value,
  quantity:this.dressDetail.get('quantity')?.value,
  quality:this.dressDetail.get('quality')?.value,
  itemWeight:this.dressDetail.get('itemWeight')?.value,
  productOrigin:this.dressDetail.get('productOrigin')?.value,
  productPrize:this.dressDetail.get('productPrize')?.value,
  status:'unApproved',
  sellerId:seller,
  sellingStatus:'unSold',
  soldQuantity:0,
  timeStamp: new Date().toISOString()
  }
  if(this.selectedOption=='dress'){
    this.apiService.postAPiData(ApiUrls.dressApi,dressDetails).subscribe((response)=>
    {
      console.log('response',response);   
      alert('product submitted')
     this.routes.navigate(['sellerDashboard'])
    }) 
  }
}
else
alert('check the field correctly')  
}
}
