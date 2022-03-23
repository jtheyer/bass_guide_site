import { Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions, Pagination } from 'swiper';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  title = 'About Us'

  constructor(public authService: AuthService) { }
  
  public swiperConfig: SwiperOptions = {
    pagination: true,
  };

  ngOnInit() {
    Swiper.use([Pagination]);
  }

}
