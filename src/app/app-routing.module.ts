import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HeaderComponent} from "@app/layout/components";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/pages'  },
  { path: 'pages', component: HeaderComponent },
  { path: ''},
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
