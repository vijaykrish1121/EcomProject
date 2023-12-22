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
  userName:string=''
  password:string=''
  msg:string=''
  details:any[]=[]
  constructor( private apiService:ApiService,private router:Router){}
    getUser(){
      if(this.userName!='' && this.password!='' ){
       this.apiService.getApiData(ApiUrls.userApi).subscribe((response:any) =>{
        console.log(response);
        this.details=response
        for(let detail of this. details){
        if(this.userName== detail.userName && this.password==detail.password ){
          sessionStorage.setItem("user",detail.phoneNum)
          this.router.navigate(['/'])
          this.apiService.loginstatus=true;
    }
    else
      this.msg='username or password is incorrect' 
  }
       } 
       )
                      }
                      else
                         this.msg='username and password is missing'
                    }
}
