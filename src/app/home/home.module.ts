import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from '@app/home/components';
import { HomeRoutingModule } from '@app/home/home-routing.module';
import { BlogModule } from '@app/blog/blog.module';

const COMPONENTS = [HomeComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [HomeRoutingModule, CommonModule, BrowserModule, BlogModule],
  exports: [...COMPONENTS],
})
export class HomeModule {}
