import { Component, OnInit } from '@angular/core';
import { BlogPost } from '@app/blog/models';
import { BlogService } from '@app/blog/services';
import { DEFAULT_BLOG_POST_IMAGE } from '@shared/constants';

@Component({
  selector: 'app-all-blog-post',
  templateUrl: './all-blog-post.component.html',
  styleUrls: ['./all-blog-post.component.scss'],
})
export class AllBlogPostComponent implements OnInit {
  blogPosts: Array<BlogPost>;

  defaultBlogPostImage = DEFAULT_BLOG_POST_IMAGE;

  constructor(public blogServices: BlogService) {}

  ngOnInit(): void {
    this.blogServices.getAllPost().then((blogPosts) => {
      this.blogPosts = blogPosts
        .map((x) => ({ ...x.fields, id: x.sys.id }))
        .sort((b, c) => {
          return Date.parse(c.updateDate) - Date.parse(b.updateDate);
        });
    });
  }
}
