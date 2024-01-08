import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';
import { ViewEncapsulation,TemplateRef,inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-dress-approvals',
  templateUrl: './dress-approvals.component.html',
  styleUrls: ['./dress-approvals.component.scss']
})
export class DressApprovalsComponent {
  private modalService=inject(NgbModal)
  constructor(private apiService:ApiService,private routes:Router){}
  approvals:any=[];
  changedApproval:any;
  final:any=[];
  dressDetail:any=[]
  viewDetail:boolean=false
  
ngOnInit(): void {
  this.loadApprovalData()
}

loadApprovalData(){
  this.apiService.filterApi(ApiUrls.dressApi,'status=unApproved').subscribe((records:any)=>
  {
    console.log(records);
    this.approvals=records

  });
}
deleteProduct(id:number){
  this.apiService.deleteApiData(ApiUrls.dressApi,id).subscribe((datas)=>
  {
   console.log(datas);
   
  })
}

approveProduct(record: any){
  record.status = 'approved';
  this.apiService.putApiData(ApiUrls.dressApi,record.id,record).subscribe(
    (response)=>{
      console.log(response);
      this.loadApprovalData();
  },error => {
    console.log(error);
  });
}

rejectProduct(record:any){
    record.status='rejected';
    this.apiService.putApiData(ApiUrls.dressApi,record.id,record).subscribe((response:any)=>
    {
    console.log(response);
    this.loadApprovalData();
    },error=>{
      console.log(error);
      
    }
    )
}
viewFullDetail(id:number,content:TemplateRef<any>){
  this.modalService.open(content, { size:'xl', scrollable: true });
  this.apiService.filterApiDatas(ApiUrls.dressApi,'id=',id).subscribe((response:any)=>
  {
    this.dressDetail=response
    this.viewDetail=true
    // this.viewProduct=false
    console.log(this.dressDetail);
    
  }
  )
     
 }

}
