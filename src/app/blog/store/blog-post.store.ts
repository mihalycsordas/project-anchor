import { BlogPost } from '@app/blog/models';
import { Injectable } from '@angular/core';
import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';
import { Entry } from 'contentful';

export interface BlogPostModel {
  blogPosts?: Entry<BlogPost>[];
}

export class SetBlogPosts {
  static readonly type = '[Blog] - Set blog posts';

  constructor(public blogPosts: Entry<BlogPost>[]) {}
}

@State<BlogPostModel>({
  name: 'blogPost',
  defaults: {
    blogPosts: undefined,
  },
})
@Injectable()
export class BlogPostSate {
  @Selector()
  static getBlogPosts(state: BlogPostModel): Entry<BlogPost>[] | undefined {
    return state.blogPosts;
  }

  @Action(SetBlogPosts)
  SetBlogPosts(ctx: StateContext<BlogPostModel>, action: SetBlogPosts): BlogPostModel {
    return ctx.patchState({ blogPosts: action.blogPosts });
  }

  @Selector()
  static getBlogPost(url: string | null): (state: { blogPost: BlogPostModel }) => Entry<BlogPost> | undefined {
    return createSelector([BlogPostSate], (state: { blogPost: BlogPostModel }) => {
      return state.blogPost.blogPosts?.find((blogPost) => blogPost.fields.url === url);
    });
  }
}
