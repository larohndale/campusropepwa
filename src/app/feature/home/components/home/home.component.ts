import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { ModalDialogService } from "src/app/core/services/modal-dialog.service";
import {ComingsoonDialogComponent} from '../../../../shared/comingsoon-dialog/comingsoon-dialog.component';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private modelService: ModalDialogService) {}

  ngOnInit() {
    console.log(this.router.url)
  }
  uploadedImage($event) {
    console.log($event);
  }
  comingsoon() {
    this.modelService.open(ComingsoonDialogComponent);
  }
}
