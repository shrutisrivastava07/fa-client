import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorrowerInformationComponent } from './borrower-information/borrower-information.component';
import { BorrowerDetailsComponent } from './borrower-details/borrower-details.component';
import { LoanDocumentsComponent } from './loan-documents/loan-documents.component';
import { LoanInformationComponent } from './loan-information/loan-information.component';

const routes: Routes = [
                        { path: '', redirectTo: '/borrower-information', pathMatch: 'full' },
                        { path: 'borrower-information', component: BorrowerInformationComponent } ,
                        { path: 'loan-information', component:LoanInformationComponent },
                        { path: 'borrower-details', component:BorrowerDetailsComponent },
                        { path: 'loan-documents', component:LoanDocumentsComponent}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
