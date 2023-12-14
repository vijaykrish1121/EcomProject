import { Component, Input } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';
import { ApiService } from 'src/app/service/api.service';
import { FormGroup } from '@angular/forms';
import { group } from '@angular/animations';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-registration',
  templateUrl: './seller-registration.component.html',
  styleUrls: ['./seller-registration.component.scss']
})
export class SellerRegistrationComponent  {
  myFormGroup:any;
  isSellerFormSubmitted :boolean=false
  isLinear = false;
  constructor(private _formBuilder: FormBuilder,private apiservice:ApiService,private router:Router) {}
  ngOnInit(): void { 
   this.myFormGroup=this.getFormGroup();
  }
  getFormGroup(){
 return new FormGroup({
    firstFormGroup:new FormGroup({ fullName:new FormControl('', [Validators.required]),
email:new FormControl('', [Validators.required]),
password:new FormControl('', [Validators.required]),
phoneNum:new FormControl('', [Validators.required]),
address:new FormControl('', [Validators.required])}),
secondFormGroup :new FormGroup({
  companyName:new FormControl('', [Validators.required]),
  companyEmail:new FormControl('', [Validators.required]),
  companyAddress:new FormControl('', [Validators.required]),
  companyPhoneNum:new FormControl('', [Validators.required]),
  gstNum:new FormControl('', [Validators.required]),
  country:new FormControl('', [Validators.required]),
  state:new FormControl('', [Validators.required]),
}),
thirdFormGroup:new FormGroup({
  fullNameBank:new FormControl('', [Validators.required]),
 bankPhoneNumber:new FormControl('', [Validators.required]),
 bankName:new FormControl('', [Validators.required]),
 bankAccountNumber:new FormControl('', [Validators.required]),
 ifsc:new FormControl('', [Validators.required]),
 branch:new FormControl('', [Validators.required]),
})
  });
}
  

  // onSubmit(){
  //   this.isSellerFormSubmitted=true
  //   console.log(this.myFormGroup);
  // }
    
   addSellerDetails(){ 
    console.log(this.myFormGroup.get('firstFormGroup.fullName')?.value)
      let SellerPersonalDetail={
          FullName:this.myFormGroup.get('firstFormGroup.fullName')?.value,
          Email:this.myFormGroup.get('firstFormGroup.email')?.value,
          Password:this.myFormGroup.get('firstFormGroup.password')?.value,
          PhoneNumber:this.myFormGroup.get('firstFormGroup.phoneNum')?.value,
          Address:this.myFormGroup.get('firstFormGroup.address')?.value
          
        }
        let SellerCompanyDetail={
                CompanyName:this.myFormGroup.get('secondFormGroup.companyName')?.value,
                CompanyEmail:this.myFormGroup.get('secondFormGroup.companyEmail')?.value,
                CompanyAddress:this.myFormGroup.get('secondFormGroup.companyAddress')?.value,
                CompanyPhoneNum:this.myFormGroup.get('secondFormGroup.companyPhoneNum')?.value,
                GstNum:this.myFormGroup.get('secondFormGroup.gstNum')?.value,
                Country:this.myFormGroup.get('secondFormGroup.country')?.value,
                State:this.myFormGroup.get('secondFormGroup.state')?.value,
    
            }
            let SellerBankDetail={
                     FullNameBank:this.myFormGroup.get('thirdFormGroup.fullNameBank')?.value,
                     BankPhoneNUmber:this.myFormGroup.get('thirdFormGroup.bankPhoneNum')?.value,
                     BankName:this.myFormGroup.get('thirdFormGroup.bankName')?.value,
                    BankAccountNumber:this.myFormGroup.get('thirdFormGroup.bankAccountNumber')?.value,
                    Ifsc  :this.myFormGroup.get('thirdFormGroup.ifsc')?.value,
                    Branch:this.myFormGroup.get('thirdFormGroup.branch')?.value,
                }
                        this.apiservice.postAPiData(ApiUrls.SellerPersonaDetailsApi,SellerPersonalDetail).subscribe(
              (response)=>{
                  console.log('response1',response);
                  this.apiservice.postAPiData(ApiUrls.SellerCompanyDetailsApi,SellerCompanyDetail).subscribe((res2)=>{
                    console.log('responce2',res2);
                    this.apiservice.postAPiData(ApiUrls.SellerBankDetailsApi,SellerBankDetail).subscribe((response)=>{
                      console.log('responce3',response)},
                      err=>{console.log(err);}
                     );
                  },
                  err=>{console.log(err);});
              },
            err=>{
              console.log(err);
            }
          );
           this.isSellerFormSubmitted=true
          this.router.navigate([''])
   }

          } 
    
        