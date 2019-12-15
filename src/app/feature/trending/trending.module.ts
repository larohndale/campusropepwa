import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TrendingRoutingModule } from "./trending-routing.module";
import { TrendingListComponent } from "./components/trending-list/trending-list.component";
import { ClientsComponent } from './pages/clients/clients.component';

@NgModule({
  declarations: [TrendingListComponent, ClientsComponent],
  imports: [TrendingRoutingModule, CommonModule]
})
export class TrendingModule {}
