import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpEvent } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { ApiUrls } from '../common/apiUrls';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  loginstatus:boolean=false
 

  // private baseUrl= 'https://retoolapi.dev/YTLid1/imageApi';
   //private baseUrl= 'https://file.io';
    private baseUrl ='https://api.escuelajs.co/api/v1/files/upload';

    
  
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
 uploadImageApi(url:string,data:any){
  return this.httpclient.post(url,data);
 }
 getImage(url:string):Observable<any>{
return this.httpclient.get(url)
 }
//  upload(file: File): Observable<HttpEvent<any>> {
//   const formData: FormData = new FormData();

//   formData.append('file', file);

//   const req = new HttpRequest('POST', `${this.baseUrl}`, formData, {
//     reportProgress: true,
//     responseType: 'json',
//   });

//   return this.httpclient.request(req);
// }
upload1(file:File):Observable<any> { 
const headers=new HttpHeaders
  const formData:FormData = new FormData();  
  // Store form name as "file" with file data 
  formData.append("file", file, file.name); 

  // Make http post request over api 
  // with formData as req 
  return this.httpclient.post<any>(this.baseUrl,formData,{headers:headers}) 
} 


getFiles(): Observable<any> {
  return this.httpclient.get(`${this.baseUrl}`);
}

getUploadedImage(filename : string): Observable<any>{
  let apiUrl = "https://api.escuelajs.co/api/v1/files/" + filename;
  return this.httpclient.get(apiUrl, { responseType: 'blob' });
}

} 


  
  
