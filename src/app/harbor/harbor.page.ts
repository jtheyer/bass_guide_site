import { Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions, Pagination } from 'swiper';

@Component({
  selector: 'app-harbor',
  templateUrl: './harbor.page.html',
  styleUrls: ['./harbor.page.scss'],
})
export class HarborPage implements OnInit {

  title = 'Welcome';

  constructor() { }

  public swiperConfig: SwiperOptions = {
    pagination: true,
    observer: true,
    observeParents: true
  };

  ngOnInit() {
    Swiper.use([Pagination]);
  }

}
