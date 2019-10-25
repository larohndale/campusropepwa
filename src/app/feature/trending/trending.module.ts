import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TrendingRoutingModule } from "./trending-routing.module";
import { TrendingListComponent } from "./components/trending-list/trending-list.component";

@NgModule({
  declarations: [TrendingListComponent],
  imports: [TrendingRoutingModule, CommonModule]
})
export class TrendingModule {}
