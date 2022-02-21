import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-borrower-information',
  templateUrl: './borrower-information.component.html',
  styleUrls: ['./borrower-information.component.css']
})
export class BorrowerInformationComponent {
  borrowerInformationForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    mobileNumber: [null, Validators.compose([
                         Validators.required, Validators.minLength(10), Validators.maxLength(10)])
                       ],
    firstName2: null,
    lastName2: null,
    mobileNumber2: [null, Validators.compose([
                         Validators.required, Validators.minLength(10), Validators.maxLength(10)])
                       ]

  });

  hasUnitNumber = false;



  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
