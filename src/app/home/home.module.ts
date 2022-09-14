import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NavigationItemService } from '@layout/services';
import { HomeComponent } from '@app/home/components';

const COMPONENTS = [HomeComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, BrowserModule, RouterModule.forRoot([])],
  exports: [...COMPONENTS],
  providers: [NavigationItemService],
})
export class HomeModule {}
