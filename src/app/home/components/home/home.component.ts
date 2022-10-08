import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Entry } from 'contentful';
import { BlogPost } from '@app/blog/models';
import { BlogPostSate } from '@app/blog/store/blog-post.store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public blogPosts: Observable<Entry<BlogPost>[] | undefined>;
  constructor(public store: Store) {}

  ngOnInit(): void {
    this.blogPosts = this.store.select(BlogPostSate.getBlogPosts);
  }
}
