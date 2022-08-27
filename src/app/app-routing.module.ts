import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HeaderComponent} from "@app/layout/components";

const routes: Routes = [
  { path: '', redirectTo: '/pages', pathMatch: 'full' },
  { path: 'pages', component: HeaderComponent },
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
