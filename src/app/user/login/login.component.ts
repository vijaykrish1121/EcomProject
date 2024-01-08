import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email:string=''
  password:string=''
  msg:string=''
  selectType:string=''
  details:any[]=[]
  constructor( private apiService:ApiService,private router:Router){}
    getUser(){
      if(this.email!='' && this.password!='' ){
       this.apiService.getApiData(ApiUrls.userApi).subscribe((response:any) =>{
        console.log(response);
        this.details=response
        for(let detail of this. details){
        if(this.email== detail.email && this.password==detail.password ){
          if(detail.userStatus=='user'){
            sessionStorage.setItem("user",detail.phoneNum)
          this.router.navigate(['/'])
          this.apiService.loginstatus=true;}
          if(detail.userStatus=='seller'){
            sessionStorage.setItem("seller",detail.phoneNum)
            this.router.navigate(['sellerDashboard'])
          }
          if(detail.userStatus=='admin'){
            sessionStorage.setItem("admin",detail.phoneNum)
            this.router.navigate(['adminDashboard'])
          }
    }
    else
      this.msg='Email or password is incorrect' 
  }
       } 
       )
                      }
                      else
                         this.msg='Email and password is missing'
                    }
}
