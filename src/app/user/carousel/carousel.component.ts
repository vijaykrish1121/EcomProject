import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/service/api.service';

// import { Router } from '@angular/router';
// import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgbCarouselModule,CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
   constructor( private apiService:ApiService,private router:Router){}
  showCarousel=true;
}
