import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { OnInit } from '@angular/core';
import { ApiUrls } from 'src/app/common/apiUrls';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.scss']
})
export class NavBarComponent implements OnInit {
  user:any=[] 
  ngOnInit(): void {
this. user=sessionStorage.getItem('user') ||''
    if(this.user==''){
      this.loginStatus=false
    }
    else
    this.loginStatus=true
    
  }
  constructor(public apiservice:ApiService,private router:Router){ }
  val:string=''
  loginStatus=false
logout() {
  sessionStorage.removeItem('user')
   this.apiservice.loginstatus= false
}
  login(){
    this.router.navigate(['login'])
    this.apiservice.loginstatus=true
   
  }

  public isCollapsed = true;
  checkSession(){
    this. val = sessionStorage.getItem('user') || ""
    if(this.val==''){
      this.loginStatus=false
       alert('session Expired Login and Continue')
    }
    else
    this.loginStatus=true
  }

}
