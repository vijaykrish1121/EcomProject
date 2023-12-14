import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  loginstatus:boolean=false
  constructor(private httpclient:HttpClient) {}
 getApiData(url:string){
return  this.httpclient.get(url)
 }
  postAPiData(url:string,data:any){
     return  this.httpclient.post(url,data)
  }
  putApiData(url:String,data:any){
    return this.httpclient.put(data,url)
  }
  deleteApiData(url:string,data:any){
    return this.httpclient.delete(url,data)
  }
//   addSellerPersonalDetails(SellerPersonalDetailsUrl:string,data:any){
//          return this.httpclient.post(SellerPersonalDetailsUrl,data)
//   }
//   addSellerCompanyDetails(SellerCompanyDetailsUrl:string,data:any){
//     return this.httpclient.post(SellerCompanyDetailsUrl,data)
// }
// addSellerBankDetails(SellerBankDetailsUrl:string,data:any){
//   return this.httpclient.post(SellerBankDetailsUrl,data)
// }
  }

