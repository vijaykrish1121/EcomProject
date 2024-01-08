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
users:any=[]
user:string=''
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
    this.checkSession()
     this.verifiedStatus()
   
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
       checkSession(){
        this. user=sessionStorage.getItem('seller')||''
        if(this.user==''){
          alert('login and continue')
          this.router.navigate([''])
        }
       
       }
       verifiedStatus(){
       this.apiservice.filterApi(ApiUrls.sellerDetailsApi,'KycStatus=approved').subscribe((response)=>
       {
        this. users=response
        for(let userdetail of this. users){
          if(this.user==userdetail.userId){
          alert('already registered')
          this.router.navigate(['sellerDashboard'])
         } 
        }
       }
       )
       }
   addSellerDetails(){ 
   this.isThirdFormGroupSubmit=true
    console.log(this.firstFormGroup.get('fullName')?.errors);
    let seller=sessionStorage.getItem('seller')  ||''
    if(this.thirdFormGroup.valid){ 
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
          sellerId:seller,
          KycStatus:'pending',
          balance:0
      }

          this.apiservice.postAPiData(ApiUrls.sellerDetailsApi,SellerDetails).subscribe((response:any)=>
          {
            console.log(response);
            
          }
          )
            alert('registered sucessfully')
              this.router.navigate(['sellerDashboard'])
    }   
  
           else
           alert('fill the field correctly')


}
}