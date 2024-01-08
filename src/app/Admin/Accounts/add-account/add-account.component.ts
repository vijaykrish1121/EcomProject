import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';
@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent {
  constructor(private apiService:ApiService,private routes:Router){}
 userName:string=''
 mobile:string=''
 accNo:string=''
 balance:string=''
 bankName:string=''
 pinNo:string=''
 cfPinNo:string=''
 msg:string=''


addAccount(){
  if(this.userName != "" && this.mobile != "" 
  && this.balance != "" && this.accNo != "" && this.bankName != "" && this.pinNo != "" && this.pinNo == this.cfPinNo){
  let adminAcc={
    userName:this.userName,
    mobile:this.mobile,
    accNo:this.accNo,
    balance:this.balance,
    bankName:this.bankName,
    pinNo:this.pinNo,
    cfPinNo:this.cfPinNo,
  }
    this.apiService.postAPiData(ApiUrls.adminAccApi,adminAcc).subscribe((response)=>
    {
      console.log(response);
      this.msg="account added sucessfully"
    }
    )
}
else
  this.msg = "Enter the mandatory fields and Pin should match with Confirm Pin";
}
}
