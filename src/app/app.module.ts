import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@layout/layout.module';
import { HomeModule } from '@app/home/home.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { BlogModule } from '@app/blog/blog.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, LayoutModule, HomeModule, BlogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
