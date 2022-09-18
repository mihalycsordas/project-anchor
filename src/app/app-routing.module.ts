import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home-routing.module').then((m) => m.HomeRoutingModule),
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog-routing.module').then((m) => m.BlogRoutingModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    onSameUrlNavigation: 'reload',
    initialNavigation: 'enabledBlocking'
}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
