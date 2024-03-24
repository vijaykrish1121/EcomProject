import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';
import { ApiService } from 'src/app/service/api.service';
import { OnInit } from '@angular/core';
import { query } from '@angular/animations';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.scss']
})
export class AddCartComponent implements OnInit {
  constructor( private apiservice:ApiService,private router:Router){}
  user:any
  listProduct:any=[]
  finallist:any=[]
productId:any
      ngOnInit(): void {
        this.user=sessionStorage.getItem('user') ||'' 
        this.getAddCartProduct()
      }
      getAddCartProduct(){
        this.apiservice.filterApiDatas(ApiUrls.addCartApi,'user=',this.user).subscribe((response)=>{
        this.productId=response
             for(let product of this.productId){
               this.apiservice.filterApiDatas(ApiUrls.mobileApi,'id=',product.id).subscribe((response)=>{
                this.listProduct=response
                console.log(this.listProduct);
                // this.finallist.push(this.listProduct);
                // this.listProduct=''
                // console.log(this.finallist);
                
                
               })
             }
        })
      }
}
