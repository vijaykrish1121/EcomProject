import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { error } from 'jquery';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
 value:any=[]
 viewDetail:any=[]
 user:any
 deliverAddress:any=[]
 isLinear=false
 paymentSteps=false
 viewPage=true
 quantity:number=0
  constructor( private apiService:ApiService,private router:Router,private routes:ActivatedRoute,private _formBuilder: FormBuilder){}
  ngOnInit(): void {
  this.viewProduct()
  this.checkSession()
  this.deliverAddress=this.getAddressDetail()
  }
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

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
   }
   )
  }
  else
  alert('fill all field')
 }
  viewProduct(){
    this.routes.queryParams.subscribe((response:any)=>
    {
      this.value=response['id']
      console.log(this.value);
      this.apiService.filterApiDatas(ApiUrls.mobileApi,'id=',this.value).subscribe((response:any)=>
      {
  this.viewDetail=response
  console.log(this.viewDetail);
  
      }
      )  
    }
    )
  }
  checkSession(){
 this.user=sessionStorage.getItem('user') ||''
 console.log(this.user);
 
  }
  buyNow(id:number){
    if(this.user!=''){
   this.router.navigate(['/checkOut'],{queryParams:{id:id,quantity:this.quantity}})
    }
    else
     alert('login and continue'),
    this.router.navigate(['/login'])
  }
}
