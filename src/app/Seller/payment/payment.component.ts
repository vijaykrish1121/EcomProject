import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router, RouterLink } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';
import { ViewEncapsulation,TemplateRef,inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  constructor(private apiService:ApiService,private routes:Router){}
 seller:string=''
 details:any=[]
  ngOnInit(): void {
      this.seller=sessionStorage.getItem('seller') || ""
      this.payment()
  }
  payment(){  
    this.apiService.filterApiDatas(ApiUrls.saleHistoryApi,'sellerId=',this.seller).subscribe((response)=>{
      console.log(response);
     this.details=response 
    })
  }
}
