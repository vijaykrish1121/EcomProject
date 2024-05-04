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
quantity:number=1
      ngOnInit(): void {
        this.user=sessionStorage.getItem('user') ||'' 
        this.getAddCartProduct()
      }
      getAddCartProduct(){
        this.apiservice.filterApiDatas(ApiUrls.addCartApi,'user=',this.user).subscribe((response:any)=>{
        this.productId=response
        
             for(let product of this.productId){
               this.apiservice.filterApiDatas(ApiUrls.mobileApi,'id=',product.productId).subscribe((response)=>{
                this.listProduct=response
                this.quantity=product.quantity
                console.log(this.listProduct);
                // this.finallist.push(this.listProduct);
                // this.listProduct=''
                // console.log(this.finallist);   
               })
             }
        })
      }
      buyNow(id:number){
        if(this.user!=''){
       this.router.navigate(['/checkOut'],{queryParams:{id:id,quantity:this.quantity}})
        }
        else
         alert('login and continue'),
        this.router.navigate(['/login'])
      }
}
