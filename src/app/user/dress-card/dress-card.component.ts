import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';

@Component({
  selector: 'app-dress-card',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './dress-card.component.html',
  styleUrl: './dress-card.component.scss'
})
export class DressCardComponent {
constructor( private apiService:ApiService,private router:Router){}
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
  
}
