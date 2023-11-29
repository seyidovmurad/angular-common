import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AlertComponent } from './components/alert/alert.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
		BrowserAnimationsModule,
		CommonModule,
		FormsModule,
		NgbModule,
		NgbModalModule,
		NgSelectModule,
		ToastrModule.forRoot()
	],
  exports: [
    AlertComponent
  ]
})
export class AngularCommonModule { }
