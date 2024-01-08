import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';
import { ApiService } from 'src/app/service/api.service';
import { OnInit } from '@angular/core';
import { query } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {
  constructor( private apiService:ApiService,private router:Router){}
  showCarousel=true;

 approvedProductMobileLists:any=[]
 approvedProductDressLists:any=[]
 viewDetail:any=[]
  ngOnInit(): void {
    this.approvedProductMobile()
    this.approvedProductDress()
  }


  approvedProductMobile(){
    this.apiService.filterApi(ApiUrls.mobileApi,'status=approved').subscribe((response:any)=>
    {
      this.approvedProductMobileLists=response
      console.log(this.approvedProductMobileLists)
    }
    )
  }
  approvedProductDress(){
    this.apiService.filterApi(ApiUrls.dressApi,'status=approved').subscribe((response:any)=>
    {
      this.approvedProductDressLists=response
      console.log(this.approvedProductMobileLists)
    }
    )
  }

 viewProduct(id:number){
  this.router.navigate(['viewProduct'],{queryParams:{id:id}})
 }

 viewDressProduct(id:number){
  this.router.navigate(['/viewDressProduct'],{queryParams:{id:id}})
 }
}
