import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent, HeaderComponent } from '@layout/components';
import { NavigationItemService } from '@layout/services';
import { SwiperComponent } from './components/swiper/swiper.component';
import { SwiperModule } from 'swiper/angular';

const COMPONENTS = [HeaderComponent, FooterComponent, SwiperComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, BrowserModule, RouterModule.forRoot([], {
    initialNavigation: 'enabledBlocking'
}), SwiperModule],
  exports: [...COMPONENTS],
  providers: [NavigationItemService],
})
export class LayoutModule {}
