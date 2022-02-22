import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private router:Router) {}

  onSubmit(): void {
    alert('Thank You for submitting the loan Information!');
      this.router.navigate(['/borrower-details']);
  }
}
