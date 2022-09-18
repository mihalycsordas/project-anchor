import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BlogPageComponent, BlogPostDetailsComponent } from '@app/blog/components';

const routes: Routes = [
  {
    path: '',
    component: BlogPageComponent,
  },
  {
    path: 'blog/:id',
    component: BlogPostDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
