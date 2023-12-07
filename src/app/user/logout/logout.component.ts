import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
        logout(){
          sessionStorage.removeItem('userName')
          sessionStorage.removeItem('password')
          localStorage.removeItem('userName')
          localStorage.removeItem('password')
        }
}
