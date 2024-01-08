import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { error } from 'jquery';
import { inject, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-transcation',
  templateUrl: './transcation.component.html',
  styleUrls: ['./transcation.component.scss']
})
export class TranscationComponent implements OnInit {
  constructor( private apiService:ApiService,private router:Router,private routes:ActivatedRoute,private _formBuilder: FormBuilder){}
  paidTranscation:any=[]
  receivedTranscation:any=[]
  colour:string=''
ngOnInit(): void {
  // this.getPaidTranscation()
  this.getReceivedTranction()

}
 
// getPaidTranscation(){
//   this.apiService.filterApi(ApiUrls.saleHistoryApi,'FundRelesed=paid').subscribe((response:any)=>{
//     this.paidTranscation=response
//   })
// }
getReceivedTranction(){
  this.apiService.getApiData(ApiUrls.paymentHistoryApi).subscribe((response:any)=>{
    this.receivedTranscation=response
    console.log(this.receivedTranscation);
    // this.apiService.deleteApiData(ApiUrls.paymentHistoryApi,5).subscribe((response)=>{
    // })
       
  })
}
}
