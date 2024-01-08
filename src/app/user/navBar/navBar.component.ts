import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.scss']
})
export class NavBarComponent implements OnInit {
   
  ngOnInit(): void {
let user=sessionStorage.getItem('user') ||''
    if(user==''){
      this.apiservice.loginstatus=false
    }
    else
    this.apiservice.loginstatus=true
    
  }
  constructor(public apiservice:ApiService,private router:Router){ }
  val:string=''
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
       alert('session Expired')
       this.router.navigate(['login'])
    }
    return true;
  }
}
