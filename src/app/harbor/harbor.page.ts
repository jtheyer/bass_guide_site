import { AfterContentChecked, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import Swiper, { SwiperOptions, Autoplay, Pagination, EffectCube } from 'swiper';
import { IonicSlides } from '@ionic/angular';

Swiper.use([Autoplay, Pagination, EffectCube, IonicSlides]);

@Component({
  selector: 'app-harbor',
  templateUrl: './harbor.page.html',
  styleUrls: ['./harbor.page.scss'],
})
export class HarborPage implements AfterContentChecked {
  @ViewChild('swiper') swiper: SwiperComponent;

  title = 'Welcome';

  constructor() { }

  public swiperConfig: SwiperOptions = {
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    pagination: true,
    slidesPerView: 'auto',
    effect: 'cube',
    loop: true,
    speed: 1500
  };

  ngAfterContentChecked(): void {
    if (this.swiper){
      this.swiper.updateSwiper({});
    }
  }

  sliderImages = [
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpg',
    'assets/images/4.jpg',
    'assets/images/5.jpg',
    'assets/images/6.jpg',
    'assets/images/7.jpg',
  ]

}