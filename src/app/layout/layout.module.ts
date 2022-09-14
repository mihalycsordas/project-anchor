import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent, HeaderComponent } from '@layout/components';
import { NavigationItemService } from '@layout/services';

const COMPONENTS = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, BrowserModule, RouterModule.forRoot([])],
  exports: [...COMPONENTS],
  providers: [NavigationItemService],
})
export class LayoutModule {}
