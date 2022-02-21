import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-information',
  templateUrl: './loan-information.component.html',
  styleUrls: ['./loan-information.component.css']
})
export class LoanInformationComponent {
  loanInformationForm = this.fb.group({

    loanAmount: [null, Validators.required],

    loanType: [null, Validators.required],
    maturity: ['maturity1', Validators.required]
  });

  hasUnitNumber = false;

  loanTypes = [
    {name: 'Maximum Available', abbreviation: 'MAX'},
    {name: 'Stated Amount', abbreviation: 'STATED'},

  ];

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thank You for submitting the loan Information!');
  }
}
