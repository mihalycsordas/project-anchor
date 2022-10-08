import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BlogPageComponent, BlogPostDetailsComponent, BlogPostListComponent } from '@app/blog/components';
import { BlogRoutingModule } from '@app/blog/blog-routing.module';
import { SwiperModule } from 'swiper/angular';

const COMPONENTS = [BlogPageComponent, BlogPostListComponent, BlogPostDetailsComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [BlogRoutingModule, CommonModule, BrowserModule, SwiperModule],
  exports: [...COMPONENTS],
})
export class BlogModule {}
