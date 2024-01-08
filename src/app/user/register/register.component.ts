import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';
import { ApiService } from 'src/app/service/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  constructor(private apiservice:ApiService,private router:Router){

  }

   
       userDetails:any;
       isFormSubmitted : boolean = false;
    ngOnInit(): void {
      this.userDetails=this.getUserDetails();
    }
       getUserDetails(){
        return new FormGroup({
          firstName:new FormControl('',[Validators.required]),
          lastName:new FormControl('',[Validators.required]),
          gender:new FormControl('',[Validators.required]),
          phoneNum:new FormControl('',[Validators.required]),
          email:new FormControl('',[Validators.required]),
          password:new FormControl('',[Validators.required]),
          confrmPassword:new FormControl('',[Validators.required]),
          userStatus:new FormControl('',[Validators.required]),
          address:new FormControl('',[Validators.required])

        })
       }

      addUserDetails(){
        this.isFormSubmitted = true;
        if(this.userDetails.valid){
          if(this.userDetails.get('password')?.value ==this.userDetails.get('confrmPassword')?.value){
        let userDetail={
          firstName:this.userDetails.get('firstName')?.value,
          lastName:this.userDetails.get('lastName')?.value,
          gender:this.userDetails.get('genderName')?.value,
           userName:this.userDetails.get('firstName')?.value+this.userDetails.get('lastName')?.value,
          phoneNum:this.userDetails.get('phoneNum')?.value,
          email:this.userDetails.get('email')?.value,
          address:this.userDetails.get('address')?.value,
          password:this.userDetails.get('password')?.value,
          userStatus:this.userDetails.get('userStatus')?.value,
          kycStatus:false
        }
         this.apiservice.postAPiData(ApiUrls.userApi,userDetail).subscribe((response)=>
          {
            this.router.navigate(['login'])
            console.log('respone',response)
          }
         )
      
    }
    else
    alert('password and confirm password is not matched')
  }
      else
       alert('Fill all the details correctly')
        }
  
    
   
}
