import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';
import { data, error, event } from 'jquery';
import { OnInit } from '@angular/core';
import { inject, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rejected-products',
  templateUrl: './rejected-products.component.html',
  styleUrls: ['./rejected-products.component.scss']
})
export class RejectedProductsComponent implements OnInit {
  constructor(private apiService:ApiService,private routes:Router){}
 rejectedProducts:any=[]
  ngOnInit(): void {
    this.viewRejectedProducts()
  }
  viewRejectedProducts(){
    this.apiService.filterApi(ApiUrls.mobileApi,'status=rejected').subscribe((response)=>{
      console.log(response);
      this.rejectedProducts=response
      
    })
  }
}
