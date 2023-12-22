import { Component, Input } from '@angular/core';
import { FormControl, Validators,FormBuilder} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';
import { ApiService } from 'src/app/service/api.service';
import { FormGroup } from '@angular/forms';
import { group } from '@angular/animations';
import { OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-seller-registration',
  templateUrl: './seller-registration.component.html',
  styleUrls: ['./seller-registration.component.scss']
})
export class SellerRegistrationComponent implements OnInit {

  firstFormGroup: any;
  secondFormGroup:any;
  thirdFormGroup:any;
  isSellerFormSubmitted :boolean=false
  isFirstFormGroupSubmit:boolean=false
  isSecondFormGroupSubmit:boolean=false
  isThirdFormGroupSubmit:boolean=false

   firstFormGroupSubmit():void{
    this.isFirstFormGroupSubmit=true
         if(this.firstFormGroup.valid){}
         else
         alert('check the fields')
   }
   secondFormGroupSubmit():void{
    this.isSecondFormGroupSubmit=true
    if(this.secondFormGroup.valid){

    }
    else
    alert('check the fields')
   }

  isLinear = false;
  constructor(private apiservice:ApiService,private router:Router) {}
  ngOnInit(): void { 
   this.firstFormGroup=this.getFirstFormGroup();
   this.secondFormGroup=this.getSecondFormGroup();
   this.thirdFormGroup=this.getThirdFormGroup();
  }
  getFirstFormGroup(){
 return new FormGroup({
 fullName:new FormControl('', [Validators.required,Validators.minLength(3)]),
email:new FormControl('', [Validators.required]),
password:new FormControl('', [Validators.required]),
phoneNum:new FormControl('', [Validators.required]),
address:new FormControl('', [Validators.required]),})
 }
 getSecondFormGroup(){
return new FormGroup({
  companyName:new FormControl('', [Validators.required]),
  companyEmail:new FormControl('', [Validators.required]),
  companyAddress:new FormControl('', [Validators.required]),
  companyPhoneNum:new FormControl('', [Validators.required]),
  gstNum:new FormControl('', [Validators.required]),
  country:new FormControl('', [Validators.required]),
  state:new FormControl('', [Validators.required]),
})
 }
 getThirdFormGroup(){
  return new FormGroup({
  fullNameBank:new FormControl('', [Validators.required,Validators.minLength(3)]),
 bankPhoneNumber:new FormControl('', [Validators.required]),
 bankName:new FormControl('', [Validators.required]),
 bankAccountNumber:new FormControl('', [Validators.required]),
 ifsc:new FormControl('', [Validators.required]),
 branch:new FormControl('', [Validators.required]),
  });
}


   addSellerDetails(){ 
   this.isThirdFormGroupSubmit=true
    console.log(this.firstFormGroup.get('fullName')?.errors);
    // console.log(this.myFormGroup.get('fullName').errors)
    if(this.thirdFormGroup.valid){
      //     sessionStorage.setItem('user',this.firstFormGroup.get('phoneNum')?.value)
      // let SellerPersonalDetail={
      //     FullName:this.firstFormGroup.get('fullName')?.value,
      //     Email:this.firstFormGroup.get('email')?.value,
      //     Password:this.firstFormGroup.get('password')?.value,
      //     PhoneNumber:this.firstFormGroup.get('phoneNum')?.value,
      //     Address:this.firstFormGroup.get('address')?.value,
      //    KycStatus:'pending'
      //   }
      //   let SellerCompanyDetail={
      //           CompanyName:this.secondFormGroup.get('companyName')?.value,
      //           CompanyEmail:this.secondFormGroup.get('companyEmail')?.value,
      //           CompanyAddress:this.secondFormGroup.get('companyAddress')?.value,
      //           CompanyPhoneNum:this.secondFormGroup.get('companyPhoneNum')?.value,
      //           GstNum:this.secondFormGroup.get('gstNum')?.value,
      //           Country:this.secondFormGroup.get('country')?.value,
      //           State:this.secondFormGroup.get('state')?.value,
      //           KycStatus:'pending'
      //       }
      //       let SellerBankDetail={
      //                FullNameBank:this.thirdFormGroup.get('fullNameBank')?.value,
      //                BankPhoneNUmber:this.thirdFormGroup.get('bankPhoneNum')?.value,
      //                BankName:this.thirdFormGroup.get('bankName')?.value,
      //               BankAccountNumber:this.thirdFormGroup.get('bankAccountNumber')?.value,
      //               Ifsc  :this.thirdFormGroup.get('ifsc')?.value,
      //               Branch:this.thirdFormGroup.get('branch')?.value,
      //              KycStatus:'pending'
      //           }     
      //                   this.apiservice.postAPiData(ApiUrls.SellerPersonaDetailsApi,SellerPersonalDetail).subscribe(
      //         (response)=>{
      //             console.log('response1',response);
      //             this.apiservice.postAPiData(ApiUrls.SellerCompanyDetailsApi,SellerCompanyDetail).subscribe((res2)=>{
      //               console.log('responce2',res2);
      //               this.apiservice.postAPiData(ApiUrls.SellerBankDetailsApi,SellerBankDetail).subscribe((response)=>{
      //                 console.log('responce3',response)},
      //                 err=>{console.log(err);}
      //                );
      //             },
      //             err=>{console.log(err);});
      //         },
      //       err=>{
      //         console.log(err);
      //       }
      //     );
      //     sessionStorage.setItem('userMobile',this.firstFormGroup.get('password')?.value)
      //     this.router.navigate(['sellerDashboard'])
      //   }    
      let SellerDetails={
          FullName:this.firstFormGroup.get('fullName')?.value,
          Email:this.firstFormGroup.get('email')?.value,
          Password:this.firstFormGroup.get('password')?.value,
          PhoneNumber:this.firstFormGroup.get('phoneNum')?.value,
          Address:this.firstFormGroup.get('address')?.value,
          CompanyName:this.secondFormGroup.get('companyName')?.value,
          CompanyEmail:this.secondFormGroup.get('companyEmail')?.value,
          CompanyAddress:this.secondFormGroup.get('companyAddress')?.value,
          CompanyPhoneNum:this.secondFormGroup.get('companyPhoneNum')?.value,
          GstNum:this.secondFormGroup.get('gstNum')?.value,
          Country:this.secondFormGroup.get('country')?.value,
          State:this.secondFormGroup.get('state')?.value,
          FullNameBank:this.thirdFormGroup.get('fullNameBank')?.value,
          BankPhoneNUmber:this.thirdFormGroup.get('bankPhoneNum')?.value,
          BankName:this.thirdFormGroup.get('bankName')?.value,
          BankAccountNumber:this.thirdFormGroup.get('bankAccountNumber')?.value,
          Ifsc  :this.thirdFormGroup.get('ifsc')?.value,
          Branch:this.thirdFormGroup.get('branch')?.value,
          KycStatus:'pending'
      }
          this.apiservice.postAPiData(ApiUrls.sellerDetailsApi,SellerDetails).subscribe((response:any)=>
          {
            console.log(response);
            
          }
          )
              this.router.navigate(['sellerDashboard'])
    }   
  
           else
           alert('fill the field correctly')
   

}
}