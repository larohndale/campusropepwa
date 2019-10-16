import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocationService } from 'src/app/core/services/location.service';
import { HelplineService } from '../../services/helpline.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-helpline-edit',
  templateUrl: './helpline-edit.component.html',
  styleUrls: ['./helpline-edit.component.scss']
})
export class HelplineEditComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert = 'This field is required';

  constructor(
    private formBuilder: FormBuilder,
    private locationService: LocationService,
    private helplineService: HelplineService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.createForm();
    this.helplineService.findHelplineById(this.route.snapshot.params.id);
    this.helplineService.inViewHelpline$.subscribe((helpline) => {
      this.formGroup.patchValue(helpline);
    });
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      headline: [null, Validators.required],
      description: [null, Validators.required],
      headlineNumber: [null, Validators.required],
      websiteLink: [null, Validators.required],
      twitterLink: [null, Validators.required],
      facebookLink: [null, Validators.required],
      state: [null, Validators.required],
      fileOnlineComplaintLink: '',
      instagramLink: '',
      whatsappLink: ''
    });
  }

  onHeadlineUpdate() {
    console.log(this.formGroup.value);
  }

  goBack(): any {
    this.locationService.goBack();
  }

}
