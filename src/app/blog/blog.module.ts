import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BlogPageComponent, BlogPostDetailsComponent } from '@app/blog/components';
import { BlogRoutingModule } from '@app/blog/blog-routing.module';
import { AllBlogPostComponent } from './components/all-blog-post/all-blog-post.component';

const COMPONENTS = [BlogPageComponent, AllBlogPostComponent, BlogPostDetailsComponent];

@NgModule({
  declarations: [...COMPONENTS, AllBlogPostComponent],
  imports: [BlogRoutingModule, CommonModule, BrowserModule],
  exports: [...COMPONENTS],
})
export class BlogModule {}
