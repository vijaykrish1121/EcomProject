import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { data, event, get } from 'jquery';
import { ApiUrls } from 'src/app/common/apiUrls';
import { ApiService } from 'src/app/service/api.service';
import { Observable } from 'rxjs';
// import { DashboardComponent } from '/dashboard/dashboard.component';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})

export class AddproductComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  preview = '';

  imageInfos?: Observable<any>;
  responseImgUrl : any;


  ngOnInit(): void {
   
    let user=  sessionStorage.getItem('seller')||''
    if(user=='')
    {
      alert('login and continue')
      this.routes.navigate(['login'])
    }
    this.mobileDetails=this.getmobileDetails()
    this.dressDetail=this.getDressDetails()
  }
 constructor(private apiService:ApiService,private routes:Router,private sanitizer: DomSanitizer){}
   mobileDetails:any
   dressDetail:any
  selectedOption:string='mobile'
  // selectedFile:File|null=null
 
  getmobileDetails(){
    return new FormGroup({
      selectProduct:new FormControl('',[Validators.required]),
      mobileModel  :new FormControl('',[Validators.required]),
      mobileRam    :new FormControl('',[Validators.required]),
      mobileStorage:new FormControl('',[Validators.required]),
      mobileWeight :new FormControl('',[Validators.required]),
      mobileSize   :new FormControl('',[Validators.required]),
      os           :new FormControl('',[Validators.required]),
      camera       :new FormControl('',[Validators.required]),
      processor    :new FormControl('',[Validators.required]),
      mobilePrize  :new FormControl('',[Validators.required]),
      mobileBattery:new FormControl('',[Validators.required]),
      choosedColour:new FormControl('',[Validators.required]),
      mobileColour :new FormControl('',[Validators.required]),
      sim          :new FormControl('',[Validators.required]),
      quality      :new FormControl('',[Validators.required]),
      mobileId     :new FormControl('',[Validators.required]),
      mobileOrigin :new FormControl('',[Validators.required]),
      quantity     :new FormControl('',[Validators.required]),
      mobileImage  :new FormControl('',[Validators.required]),
    })
  }
     getDressDetails(){
      return new FormGroup({
        selectGender:new FormControl('',[Validators.required]),
        selectProduct:new FormControl('',[Validators.required]),
        selectProductModel:new FormControl('',[Validators.required]),
        productName:new FormControl('',[Validators.required]),
        dressSize:new FormControl('',[Validators.required]),
        dressColour:new FormControl('',[Validators.required]),
        productId:new FormControl('',[Validators.required]),
        quantity:new FormControl('',[Validators.required]),
        quality:new FormControl('',[Validators.required]),
        itemWeight:new FormControl('',[Validators.required]),
        productOrigin:new FormControl('',[Validators.required]),
        productPrize:new FormControl('',[Validators.required]),

      })
     }
   
addProduct() {
  this.upload();
   let seller=sessionStorage.getItem('seller') ||''
  if(this.mobileDetails.valid ){  
  let mobileDetail={
    selectProduct:this.mobileDetails.get('selectProduct')?.value,
    mobileModel:this.mobileDetails.get('mobileModel')?.value,
    mobileRam:this.mobileDetails.get('mobileRam')?.value,
    mobileStorage:this.mobileDetails.get('mobileStorage')?.value,
    mobileWeight:this.mobileDetails.get('mobileWeight')?.value,
    mobileSize:this.mobileDetails.get('mobileSize')?.value,
    os:this.mobileDetails.get('os')?.value,
    camera:this.mobileDetails.get('camera')?.value,
    processor:this.mobileDetails.get('processor')?.value,
    mobilePrize:this.mobileDetails.get('mobilePrize')?.value,
    mobileBattery:this.mobileDetails.get('mobileBattery')?.value,
    choosedColour:this.mobileDetails.get('choosedColour')?.value,
    mobileColor:this.mobileDetails.get('mobileColour')?.value,
    sim:this.mobileDetails.get('sim')?.value,
    quality:this.mobileDetails.get('quality')?.value,
    mobileId:this.mobileDetails.get('mobileId')?.value,
    mobileOrigin:this.mobileDetails.get('mobileOrigin')?.value,
    quantity:this.mobileDetails.get('quantity')?.value,
    status:'unApproved',
    sellerId:seller,
    sellingStatus:'unSold',
    soldQuantity:0,
    remainingQuantity:this.mobileDetails.get('quantity')?.value,
    timeStamp: new Date().toString(),
    mobileImage: this.responseImgUrl
  }
  if(this.selectedOption=='mobile'){
    
    this.apiService.postAPiData(ApiUrls.mobileApi,mobileDetail).subscribe((response)=>
    {
      console.log('response',response);   
      alert('product submitted')
     this.routes.navigate(['sellerDashboard'])
    }) 
  
  }
}
else
alert('check the field correctly')  
}
addDressDetail(){
  let seller=sessionStorage.getItem('seller') ||''
  if(this.dressDetail.valid){
  let dressDetails={
  selectGender:this.dressDetail.get('selectGender')?.value,
  selectProduct:this.dressDetail.get('selectProduct')?.value,
  selectProductModel:this.dressDetail.get('selectProductModel')?.value,
  productName:this.dressDetail.get('productName')?.value,
  dressSize:this.dressDetail.get('dressSize')?.value,
  dressColour:this.dressDetail.get('dressColour')?.value,
  productId:this.dressDetail.get('productId')?.value,
  quantity:this.dressDetail.get('quantity')?.value,
  quality:this.dressDetail.get('quality')?.value,
  itemWeight:this.dressDetail.get('itemWeight')?.value,
  productOrigin:this.dressDetail.get('productOrigin')?.value,
  productPrize:this.dressDetail.get('productPrize')?.value,
  status:'unApproved',
  sellerId:seller,
  sellingStatus:'unSold',
  soldQuantity:0,
  timeStamp: new Date().toISOString(),
  dressImage:this.responseImgUrl
  }
  if(this.selectedOption=='dress'){
    this.apiService.postAPiData(ApiUrls.dressApi,dressDetails).subscribe((response)=>
    {
      console.log('response',response);   
      alert('product submitted')
     this.routes.navigate(['sellerDashboard'])
    }) 
  }
}
else
alert('check the field correctly')  
}
 
//  onChange(event:any){
//   let reader =new FileReader();
//   this.file=event.target.files[0];
//   reader.readAsDataURL(event.target.files[0]);
//   reader.onload=()=>{
//     this.productImage=reader.result
//   }


//  }
//  addImage():void{
  
//  }
// processFile(imageInput:any){
//   const File:File=imageInput.files[0];
//   const reader=new FileReader();
//   reader.addEventListener('load',(event:any)=>{
//     this.selectedFile=new imageInput(event.target.result,File);
//     this.apiService.uploadImage(ApiUrls.imageApi,this.selectedFile.file).subscribe(res=>{
//       console.log(res);
      
//     })
//   })
// }
// uploadImage(event:any){
//   var file=this.productImage.target.files[0];
//   const formdata:FormData=new FormData();
//   formdata.append('file',file)
// this.apiService.uploadImageApi(ApiUrls.imageApi,formdata).subscribe((response:any)=>{
//   console.log(response);
//   console.log(formdata);
  
// })
// }
// getImage(){
//   this.apiService.getImage(ApiUrls.imageApi).subscribe((res)=>{
//     console.log(res);
    
//   })
// }
uploadFilenames:string[]=[];

upload() {
  this.progress = 0;

  if (this.selectedFiles) {
    const file = this.selectedFiles.item(0);
 
    if (file) {
      this.currentFile = file;

      this.apiService.upload1(file).subscribe(
        (res: any) => {
          console.log(res.filename);
          this.responseImgUrl = res.location;
          if(this.selectedOption=='mobile'){
            this.addProduct();
          } 
          else if(this.selectedOption=='dress'){
        this.addDressDetail()
       }
        },
        error => {
          // Handle error if any
          console.error('Error uploading file:', error);
        }
     
      );
    }

    this.selectedFiles = undefined;
  }
   //   {
      //   next: (event: any) => {
      //     if (event.type === HttpEventType.UploadProgress) {
      //       this.progress = Math.round((100 * event.loaded) / event.total);
      //     } else if (event instanceof HttpResponse) {
      //       this.message = event.body.message;
      //       this.imageInfos = this.apiService.getFiles();
      //     }
      //   },
      //   error: (err: any) => {
      //     console.log(err);
      //     this.progress = 0;

      //     if (err.error && err.error.message) {
      //       this.message = err.error.message;
      //     } else {
      //       this.message = 'Could not upload the image!';
      //     }

      //     this.currentFile = undefined;
      //   },
      // }
}
selectFile(event: any): void {
  this.message = '';
  this.preview = '';
  this.progress = 0;
  this.selectedFiles = event.target.files;

  if (this.selectedFiles) {
    const file: File | null = this.selectedFiles.item(0);

    if (file) {
      this.preview = '';
      this.currentFile = file;

      const reader = new FileReader();

      reader.onload = (e: any) => {
        console.log(e.target.result);
        this.preview = e.target.result;
      };

      reader.readAsDataURL(this.currentFile);
     
    }
  }
}

}

