import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '@app/blog/models';
import { BlogService } from '@app/blog/services';
import { DEFAULT_BLOG_POST_IMAGE } from '@shared/constants';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Entry } from 'contentful';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.scss'],
})
export class BlogPostListComponent implements OnInit {
  @Input() numberOfPost: number;
  @Input() blogPosts: Observable<Entry<BlogPost>[] | undefined>;

  public isMobile: boolean;

  defaultBlogPostImage = DEFAULT_BLOG_POST_IMAGE;

  constructor(public blogServices: BlogService, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe('(max-width: 1023px)').subscribe((breakpoints) => {
      this.isMobile = breakpoints.matches;
    });
  }

  ngOnInit(): void {}
}
