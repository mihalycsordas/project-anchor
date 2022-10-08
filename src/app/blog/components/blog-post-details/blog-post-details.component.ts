import { Component } from '@angular/core';
import { BlogPost } from '@app/blog/models';
import { ActivatedRoute } from '@angular/router';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Document } from '@contentful/rich-text-types';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { BlogPostSate } from '@app/blog/store/blog-post.store';
import { Entry } from 'contentful';

@Component({
  selector: 'app-blog-post-details',
  templateUrl: './blog-post-details.component.html',
  styleUrls: ['./blog-post-details.component.scss'],
})
export class BlogPostDetailsComponent {
  blogPost$: Observable<Entry<BlogPost> | undefined>;
  postUrl: string | null;

  constructor(public store: Store, private route: ActivatedRoute) {
    this.postUrl = this.route.snapshot.paramMap.get('url');

    this.blogPost$ = this.store.select(BlogPostSate.getBlogPost(this.postUrl));
  }

  _returnHtmlFromRichText(richText: Document | null | undefined) {
    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
  }
}
