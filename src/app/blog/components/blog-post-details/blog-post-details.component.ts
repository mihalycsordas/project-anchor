import { Component, OnInit } from '@angular/core';
import { BlogPost } from '@app/blog/models';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '@app/blog/services';
import { Asset, Entry } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Document } from '@contentful/rich-text-types';

@Component({
  selector: 'app-blog-post-details',
  templateUrl: './blog-post-details.component.html',
  styleUrls: ['./blog-post-details.component.scss'],
})
export class BlogPostDetailsComponent implements OnInit {
  blogPost$: Promise<Entry<BlogPost>>;
  blogPostImage: Promise<string | Asset>;

  constructor(private route: ActivatedRoute, private blogServices: BlogService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      this.blogPost$ = this.blogServices.getPostById(id);
    });

    console.log(this.blogPostImage);
  }

  _returnHtmlFromRichText(richText: Document | null | undefined) {
    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
  }
}
