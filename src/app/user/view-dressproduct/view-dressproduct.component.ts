import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-view-dressproduct',
  templateUrl: './view-dressproduct.component.html',
  styleUrls: ['./view-dressproduct.component.scss']
})
export class ViewDressproductComponent implements OnInit {

  constructor( private apiService:ApiService,private router:Router,private routes:ActivatedRoute,private _formBuilder: FormBuilder){}
  value:any=[]
  viewDetail:any=[]
  user:any
  quantity:number=0
  viewPage=true
   ngOnInit(): void {
     this.viewProduct()
     this.checkSession()
   }
  viewProduct(){
    this.routes.queryParams.subscribe((response:any)=>
    {
      this.value=response['id']
      console.log(this.value);
      this.apiService.filterApiDatas(ApiUrls.dressApi,'id=',this.value).subscribe((response:any)=>
      {
  this.viewDetail=response
  console.log(this.viewDetail);
  
      }
      )  
    }
    )
  }
  checkSession(){
    this.user=sessionStorage.getItem('user') ||''
    console.log(this.user);
    
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
