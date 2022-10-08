import { Component } from '@angular/core';
import { BlogPost } from '@app/blog/models';
import { Store } from '@ngxs/store';
import { SetBlogPosts } from '@app/blog/store/blog-post.store';
import { BlogService } from '@app/blog/services';
import { Entry } from 'contentful';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'project-anchor';

  /*message = '';*/

  constructor(public store: Store, public blogServices: BlogService) {
    /*this.http.get('/api/message').subscribe((resp: any) => (this.message = resp.text));*/
  }

  blogPosts: Promise<Entry<BlogPost>[]>;

  ngOnInit(): void {
    this.blogPosts = this.blogServices.getBlogPosts();

    this.blogPosts.then((result) => {
      result
        .map((x) => ({
          ...x.fields,
          id: x.sys.id,
        }))
        .sort((b, c) => {
          return Date.parse(c.updateDate) - Date.parse(b.updateDate);
        });
      this.store.dispatch(new SetBlogPosts(result));
    });
  }
}
