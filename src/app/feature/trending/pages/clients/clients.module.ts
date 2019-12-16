import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { AddClientDialog } from './add-client-dialog/add-client-dialog.component';

@NgModule({
  declarations: [ClientsComponent, AddClientDialog],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ],
  entryComponents: [
    AddClientDialog
  ]
})
export class ClientsModule { }
