import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-mobile-card',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './mobile-card.component.html',
  styleUrl: './mobile-card.component.scss'
})
export class MobileCardComponent {
   constructor( private apiService:ApiService,private router:Router){}

  approvedProductMobileLists:any=[] 
  quantity:number=1;


  ngOnInit():void{
    this.approvedProductMobile()
  }


   approvedProductMobile(){
      this.apiService.filterApi(ApiUrls.mobileApi,'status=approved').subscribe((response:any)=>
      {
        this.approvedProductMobileLists=response
        console.log(this.approvedProductMobileLists)
      }
      )
    }
    viewMobileProduct(id:number){
      this.router.navigate(['viewProduct'],{queryParams:{id:id}})
     }
}
