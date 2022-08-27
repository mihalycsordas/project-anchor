import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HeaderComponent} from "@app/layout/components";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {NavigationItemService} from "@app/layout/services";

const COMPONENTS = [HeaderComponent];


@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, BrowserModule, RouterModule.forRoot([])],
  exports: [...COMPONENTS],
  providers: [NavigationItemService],
})
export class LayoutModule {}
