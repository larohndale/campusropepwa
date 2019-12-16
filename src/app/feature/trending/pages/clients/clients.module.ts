import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { AddClientDialog } from './add-client-dialog/add-client-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ClientsComponent, AddClientDialog],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ],
  entryComponents: [
    AddClientDialog
  ]
})
export class ClientsModule { }
