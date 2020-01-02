import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TrendingRoutingModule } from "./trending-routing.module";
import { TrendingListComponent } from "./components/trending-list/trending-list.component";
import { ClientsModule } from './pages/clients/clients.module';

@NgModule({
  declarations: [TrendingListComponent],
  imports: [TrendingRoutingModule, CommonModule, ClientsModule],
  exports: [ClientsModule]
})
export class TrendingModule { }
