import { Component, OnInit, Input } from "@angular/core";
import { CampusRopeIScrollComponent } from "../campusrope-infinite-scroll.component";

@Component({
  selector: "campusrope-infinite-list",
  templateUrl: "./campusrope-infinite-list.component.html",
  styleUrls: ["./campusrope-infinite-list.component.scss"]
})
export class CampusRopeISListComponent extends CampusRopeIScrollComponent
  implements OnInit {
  ngOnInit() {
    super.ngOnInit();
  }
}
