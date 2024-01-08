import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { ApiUrls } from 'src/app/common/apiUrls';
import { ViewEncapsulation,TemplateRef,inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  constructor(private apiService:ApiService,private routes:Router){}
 adminAccounts:any=[]
  ngOnInit(): void {
    this.getsavedAccount()
  }
 

  getsavedAccount(){
    this.apiService.getApiData(ApiUrls.adminAccApi).subscribe((response)=>
    {
    this.adminAccounts=response
    }
    )
  }
}
