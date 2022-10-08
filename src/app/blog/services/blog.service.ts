import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../../../environments/environment';
import { BlogPost } from '@app/blog/models';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private cdaClient = createClient({
    environment: environment.contentful.environment,
    space: environment.contentful.space,
    accessToken: environment.contentful.accessToken,
  });

  getBlogPosts(query?: object): Promise<Entry<BlogPost>[]> {
    return this.cdaClient
      .getEntries<BlogPost>(Object.assign({}, query, { content_type: 'blogPost' }))
      .then((res) => res.items);
  }
}
