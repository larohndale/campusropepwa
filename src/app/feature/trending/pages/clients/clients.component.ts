import { Component, OnInit } from '@angular/core';
import { MatDialog, } from '@angular/material/dialog';
import { CommonService } from 'src/app/core/services/common.service';
import { AddClientDialog } from './add-client-dialog/add-client-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients: {}[]
  constructor(public dialog: MatDialog, public readonly commonService: CommonService, private readonly router: Router) { }

  ngOnInit() {
    this.getClients()
  }

  getClients() {
    this.commonService.getData('clients')
      .subscribe(clients => {
        this.clients = clients
      })
  }

  addClient() {
    const dialogRef = this.dialog.open(AddClientDialog, {
      width: '350px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  selectedClient(client) {
    this.router.navigate(['/trending/admin'])
  }

}
