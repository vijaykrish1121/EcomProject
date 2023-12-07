import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
      if(this.userName!='' && this.password!=''){
       this.apiService.userurl.subscribe((response:any) =>{
        console.log(response);
        this.details=response
        for(let detail of this. details){
        if(this.userName== detail.userName && this.password==detail.password){
          sessionStorage.setItem("userName",this.userName)
          sessionStorage.setItem("password",this.password)
          this.LocalSession()
          this.router.navigate(['/'])
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

                    LocalSession(){
                      localStorage.setItem("userName",this.userName)
                      localStorage.setItem("password",this.password)
                    }
}
