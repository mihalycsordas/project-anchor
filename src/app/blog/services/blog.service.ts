import { Injectable } from '@angular/core';
import { Asset, createClient, Entry } from 'contentful';
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

  getAllPost(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient
      .getEntries<BlogPost>(Object.assign({}, query, { content_type: 'blogPost' }))
      .then((res) => res.items);
  }

  getPostById(id: string): Promise<Entry<BlogPost>> {
    return this.cdaClient.getEntry(id);
  }
}
