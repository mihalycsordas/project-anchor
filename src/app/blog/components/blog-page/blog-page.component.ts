import { Component, OnInit } from '@angular/core';
import { BlogPostSate } from '@app/blog/store/blog-post.store';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Entry } from 'contentful';
import { BlogPost } from '@app/blog/models';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
})
export class BlogPageComponent implements OnInit {
  public blogPosts: Observable<Entry<BlogPost>[] | undefined>;

  constructor(public store: Store) {}

  ngOnInit(): void {
    this.blogPosts = this.store.select(BlogPostSate.getBlogPosts);
  }
}
