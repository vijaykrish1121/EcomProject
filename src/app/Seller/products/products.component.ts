import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router, RouterLink } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';
import { ViewEncapsulation,TemplateRef,inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 seller:any
 unsoldedproducts:any=[]
 ngOnInit(): void {
  this.seller= sessionStorage.getItem('seller') ||''
  this.unSoldProducts()
 }
  constructor(private apiService:ApiService,private routes:Router){}
  checkSession(){
  
  }
unSoldProducts(){
this.apiService.filterApiDatas(ApiUrls.mobileApi,'status=approved&sellingStatus=unsold&sellerId=',this.seller).subscribe((response:any)=>
{
this.unsoldedproducts=response
}
) 
}
}
