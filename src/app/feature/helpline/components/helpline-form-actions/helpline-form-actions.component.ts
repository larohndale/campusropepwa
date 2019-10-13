import { Component, OnInit, Input } from '@angular/core';
import { IHelpline } from 'src/app/core/models/helpline';
import { Router } from '@angular/router';

@Component({
  selector: 'app-helpline-form-actions',
  templateUrl: './helpline-form-actions.component.html',
  styleUrls: ['./helpline-form-actions.component.scss']
})
export class HelplineFormActionsComponent implements OnInit {
  @Input() helplineData: IHelpline;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToEditPage() {
    this.router.navigate(['/edit/', this.helplineData._id]);
  }

}
