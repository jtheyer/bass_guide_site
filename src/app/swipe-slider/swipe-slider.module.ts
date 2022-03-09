import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import { SwipeSliderComponent } from './swipe-slider.component';

@NgModule({
    declarations: [
        SwipeSliderComponent
    ],
    imports: [
        SwiperModule
    ],
})
export class SwipeSliderModule {}