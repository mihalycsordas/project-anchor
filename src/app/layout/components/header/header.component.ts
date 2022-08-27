import { Component, OnInit } from '@angular/core';
import {Entry} from "contentful";
import {NavigationItem} from "@app/layout/models";
import {NavigationItemService} from "@app/layout/services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navigationItems: Array<Entry<NavigationItem>>;

  constructor(private navigationItemService: NavigationItemService) { }

  ngOnInit() {
    this.navigationItemService
      .getNavigationItems()
      .then((navigationItems) => (this.navigationItems = navigationItems.items));  }
}
