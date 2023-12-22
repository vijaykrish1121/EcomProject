import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'jquery';
import { ApiUrls } from 'src/app/common/apiUrls';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-appravol',
  templateUrl: './appravol.component.html',
  styleUrls: ['./appravol.component.scss']
})
export class AppravolComponent implements OnInit{
  
  constructor(private apiService:ApiService,private routes:Router){}
  approvals:any=[];
  changedApproval:any;
  final:any=[];
  
ngOnInit(): void {
  this.loadApprovalData()
}

loadApprovalData(){
  this.apiService.getApiData(ApiUrls.addProductApi).subscribe((records:any)=>
  {
    console.log(records);
    this.approvals=records.filter((data:any)=> data.status == 'unApproved');

  });
}
deleteProduct(id:number){
  this.apiService.deleteApiData(ApiUrls.addProductApi,id).subscribe((datas)=>
  {
   console.log(datas);
   
  })
}

approveProduct(record: any){
  record.status = 'approved';
  this.apiService.putApiData(ApiUrls.addProductApi,record.id,record).subscribe(
    (response)=>{
      console.log(response);
      this.loadApprovalData();
  },error => {
    console.log(error);
  });
}

rejectProduct(record:any){
    record.status='rejected';
    this.apiService.putApiData(ApiUrls.addProductApi,record.id,record).subscribe((response:any)=>
    {
    console.log(response);
    
    },error=>{
      console.log(error);
      
    }
    )
}


// approveProduct(id:any,requestBody:any){
  
//    this.approvals={id:this.approvals.id,status: this.approvals.status} ;
//   this.changedApproval={id:this.approvals.id,status:'approved'};

// approveProduct(id:number){
//    this.approvals={id,status:'inactive'};
//   this.changedApproval={id,status:'active'}
  
//   console.log(this.approvals);
// this.apiService.putApiData(ApiUrls.addProductApi,id,this.changedApproval).subscribe((response)=>{
      
//       this.approvals.push(response)
//         console.log(response);
//       //  console.log(this.approvals);
       
// })
  
  
// }

}
