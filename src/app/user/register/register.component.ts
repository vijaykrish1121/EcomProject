import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  constructor(private apiservice:ApiService,private router:Router){

  }
      firstName:string=''
      lastName:string=''
      gender:string=''
      phoneNum:string=''
      email:string=''
      password:string='' 
      userStatus:string=''
      address:string=''
       userDetails:any=[]
       
      addUserDetails(){
        if(this.firstName!='' && this.lastName!="" && this.gender!=''&& this.phoneNum!='' && this.email!='' && this.address!='' && this. password!='' && this.userStatus!=''){
        let userDetail={
          firstName:this.firstName,
          lastName:this.lastName,
          gender:this.gender,
           userName: this.firstName+this.lastName,
          phoneNum:this.phoneNum,
          email:this.email,
          address:this.address,
          password:this.password,
          userStatus:this.userStatus
        }
         this.apiservice.addUserDetail("https://retoolapi.dev/tzfucZ/data",userDetail).subscribe((response)=>
          {
             console.log('respone',response)
          }
         )
      }
      }
      deleteUserDetail(){
        this.apiservice.deleteUserDetail("https://retoolapi.dev/tzfucZ/data"+"/",this.userDetails.this.firstName).subscribe((afterdelete)=>
        {
         console.log(afterdelete);
         
        })
      }
         
}
