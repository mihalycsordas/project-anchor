import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Entry } from 'contentful';
import { NavigationItem } from '@app/layout/models';
import { NavigationItemService } from '@app/layout/services';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('navigation')
  public navigationRef: ElementRef;

  public isMobile: boolean;
  public showNavigation: boolean;
  navigationItems: Array<NavigationItem>;
  navigationChildItems: Record<string, NavigationItem>;

  public touched: string;
  public touchSupported: boolean;

  constructor(
    private navigationItemService: NavigationItemService,
    private router: Router,
    private renderer: Renderer2
  ) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      if (this.navigationRef) {
        this.renderer.removeClass(this.navigationRef.nativeElement, 'has-hover');

        Array.from(this.navigationRef.nativeElement.querySelectorAll('.has-hover')).forEach((e) =>
          this.renderer.removeClass(e, 'has-hover')
        );
      }
    });
  }

  ngOnInit() {
    this.navigationItemService.getNavigationItems().then((navigationItems) => {
      this.navigationItems = navigationItems.items
        .map((x) => ({ ...x.fields, id: x.sys.id }))
        .sort((b, c) => b.order - c.order);

      this.navigationChildItems = (navigationItems.includes.Entry as Array<Entry<unknown>>)
        // @ts-ignore
        .map((x) => ({ ...x.fields, id: x.sys.id }))
        .reduce((result, actualItem) => ({ ...result, [actualItem.id]: actualItem }), {});
    });
  }

  public childrenDisplayToggle(event: MouseEvent): void {
    let target = (event.target as Element).closest('li');
    if (target?.classList.contains('is-active')) {
      this.renderer.removeClass(target, 'is-active');
    } else {
      this.renderer.addClass(target, 'is-active');
    }
  }

  public onMenuItemMouseEnter(event: MouseEvent): void {
    this.renderer.addClass(this.navigationRef.nativeElement, 'has-hover');
    this.renderer.addClass(event.target, 'has-hover');
  }

  public onMenuItemMouseLeave(event: MouseEvent): void {
    this.renderer.removeClass(this.navigationRef.nativeElement, 'has-hover');
    this.renderer.removeClass(event.target, 'has-hover');
  }

  touchHandler(navigationItem: NavigationItem, e: PointerEvent | MouseEvent) {
    e.stopPropagation();

    if (this.touchSupported) {
      if (!navigationItem.childItems?.length || this.touched === navigationItem.url) {
        this.touched = '';
        this.router.navigateByUrl(navigationItem.url);
      } else {
        this.touched = navigationItem.url;
      }
    }
  }
}
