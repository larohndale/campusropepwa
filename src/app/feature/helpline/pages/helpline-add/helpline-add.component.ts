import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocationService } from 'src/app/core/services/location.service';

@Component({
  selector: 'app-helpline-add',
  templateUrl: './helpline-add.component.html',
  styleUrls: ['./helpline-add.component.scss']
})
export class HelplineAddComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert = 'This field is required';

  constructor(
    private formBuilder: FormBuilder,
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.createForm();
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

  onHeadlineAdd() {
    console.log(this.formGroup.value);
  }

  goBack(): any {
    this.locationService.goBack();
  }
}
