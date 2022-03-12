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
      delay: 3000,
      disableOnInteraction: true,
    },
    pagination: true,
    // observer: true,
    // observeParents: true,
    // slidesPerView: 3,
    slidesPerView: 'auto',
    effect: 'cube',
    loop: true
  };

  ngAfterContentChecked(): void {
    if (this.swiper){
      this.swiper.updateSwiper({});
    }
  }

}