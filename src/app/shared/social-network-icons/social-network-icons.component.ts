import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { IHelpline } from "src/app/core/models/helpline";

@Component({
  selector: "app-social-network-icons",
  templateUrl: "./social-network-icons.component.html",
  styleUrls: ["./social-network-icons.component.scss"]
})
export class SocialNetworkIconsComponent implements OnInit {
  @Input() helpline: IHelpline;

  constructor() {}

  ngOnInit() {}

  getStyles(url) {
    return {
      "pointer-events": url ? "auto" : "none",
      opacity: url ? "1" : "0.2"
    };
  }
}
