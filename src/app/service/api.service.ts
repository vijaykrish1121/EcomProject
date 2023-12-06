import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url='https://retoolapi.dev/tzfucZ/data'
  userurl=this.getDetail()
  constructor(private httpclient:HttpClient) {}
 getDetail(){
return  this.httpclient.get(this.url)
 }
  addUserDetail(url:string,data:any){
     return  this.httpclient.post(url,data)
  }
  updateUserDetail(url:String,data:any){
    return this.httpclient.put(data,url)
  }
  deleteUserDetail(url:string,data:any){
    return this.httpclient.delete(url,data)
  }
}
