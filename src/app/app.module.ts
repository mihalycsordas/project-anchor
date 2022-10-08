import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@layout/layout.module';
import { HomeModule } from '@app/home/home.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { BlogModule } from '@app/blog/blog.module';
import { NgxsModule } from '@ngxs/store';
import { BlogPostSate } from '@app/blog/store/blog-post.store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgxsModule.forRoot([BlogPostSate]),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    HomeModule,
    BlogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
