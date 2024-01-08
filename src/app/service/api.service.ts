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
  putApiData(url:String,id:any,requestBody:any){
    return this.httpclient.put(url+'/'+id,requestBody)
  }
  deleteApiData(url:string,id:any){
    return this.httpclient.delete(url+'/'+id)
  }
  filterApiDatas(url:string,requestBody1:any,requestbody2:any){
     return this.httpclient.get(url+'?'+requestBody1+requestbody2)
  }  
  filterApi(url:string,requestBody1:any){
    return this.httpclient.get(url+'?'+requestBody1)
 } 
  }

