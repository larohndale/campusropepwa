import { Component, OnInit } from '@angular/core';
import { HelplineService } from '../../services/helpline.service';

@Component({
  selector: 'app-admin-helpline',
  templateUrl: './admin-helpline.component.html',
  styleUrls: ['./admin-helpline.component.scss']
})
export class AdminHelplineComponent implements OnInit {

  helplines$ = this.helplineService.helplines$;

  constructor(private helplineService: HelplineService) { }

  ngOnInit() {
    this.helplineService.findHelplines();
  }

}
