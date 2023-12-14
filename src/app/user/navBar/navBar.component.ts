import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.scss']
})
export class NavBarComponent {
    
  constructor(public apiservice:ApiService,private router:Router){

  }
logout() {
  sessionStorage.removeItem('userName')
   this.apiservice.loginstatus= false
}
  login(){
    this.router.navigate(['login'])
    this.apiservice.loginstatus=true
  }

  public isCollapsed = true;
  checkSession(){
    let val = sessionStorage.getItem('userName') || ""
    if(val==''){
       alert('session Expired')
       this.router.navigate(['login'])
    }
    return true;
  }
}
