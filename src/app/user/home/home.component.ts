import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';
import { ApiService } from 'src/app/service/api.service';
import { OnInit } from '@angular/core';
import { query } from '@angular/animations';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {
  constructor( private apiService:ApiService,private router:Router){}
  showCarousel=true;


 approvedProductDressLists:any=[]
 viewDetail:any=[]
 user:any
 quantity:number=1;
  ngOnInit(): void {
    this.approvedProductDress()
    this.user=sessionStorage.getItem('user')||''
  }

 
  approvedProductDress(){
    this.apiService.filterApi(ApiUrls.dressApi,'status=approved').subscribe((response:any)=>
    {
      this.approvedProductDressLists=response
   
    }
    )
  }

 

 viewDressProduct(id:number){
  this.router.navigate(['/viewDressProduct'],{queryParams:{id:id}})
 }

addCart(products:any){
  if(this.user!=''){
     let detail={
       user:this.user,
       productId:products.id,
       quantity:this.quantity
     }
     this.apiService.postAPiData(ApiUrls.addCartApi,detail).subscribe((response)=>{
      console.log(response);
     })
    }
    else
    alert('login and addCart')
}
}
