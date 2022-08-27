import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HeaderComponent} from "@app/layout/components";

const COMPONENTS = [HeaderComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [RouterModule],
  exports: [...COMPONENTS],
})
export class LayoutModule {}
