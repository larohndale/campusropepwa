import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ZenYogaRoutingModule } from "./zenyoga-routing.module";
import { ZenYogaListComponent } from "./components/zenyoga-list/zenyoga-list.component";


@NgModule({
  declarations: [ZenYogaListComponent],
  imports: [ZenYogaRoutingModule, CommonModule],
  exports: []
})
export class ZenYogaModule { }
