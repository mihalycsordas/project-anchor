import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavigationItem } from '@layout/models';
import { NavigationItemService } from '@layout/services';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @ViewChild('footerCopyRightNavigation')
  public navigationRef: ElementRef;

  public currentYear: number = new Date().getFullYear();

  public footerNavigationItems: Array<NavigationItem>;
  public footerCompanyNavigationItems: Array<NavigationItem>;
  public footerSocialNavigationItems: Array<NavigationItem>;
  public footerPolicyNavigationItems: Array<NavigationItem>;

  constructor(private renderer: Renderer2, public navigationItemService: NavigationItemService) {}

  ngOnInit(): void {
    this.navigationItemService.getFooterNavigationItems().then((navigationItems) => {
      this.footerNavigationItems = navigationItems.items
        .map((x) => ({ ...x.fields, id: x.sys.id }))
        .sort((b, c) => b.order - c.order);
    });

    this.navigationItemService.getFooterCompanyNavigationItems().then((navigationItems) => {
      this.footerCompanyNavigationItems = navigationItems.items
        .map((x) => ({ ...x.fields, id: x.sys.id }))
        .sort((b, c) => b.order - c.order);
    });

    this.navigationItemService.getSocialItems().then((navigationItems) => {
      this.footerSocialNavigationItems = navigationItems.items
        .map((x) => ({ ...x.fields, id: x.sys.id }))
        .sort((b, c) => b.order - c.order);
    });

    this.navigationItemService.getFooterCopyrightNavigation().then((navigationItems) => {
      this.footerPolicyNavigationItems = navigationItems.items
        .map((x) => ({ ...x.fields, id: x.sys.id }))
        .sort((b, c) => b.order - c.order);
    });
  }

  public onMenuItemMouseEnter(event: MouseEvent): void {
    this.renderer.addClass(this.navigationRef.nativeElement, 'has-hover');
    this.renderer.addClass(event.target, 'has-hover');
  }

  public onMenuItemMouseLeave(event: MouseEvent): void {
    this.renderer.removeClass(this.navigationRef.nativeElement, 'has-hover');
    this.renderer.removeClass(event.target, 'has-hover');
  }
}
