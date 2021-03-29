import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {
  StudentDetailsRoutingModule,
  routeComponents,
} from './student-details-routing.module';

@NgModule({
  declarations: [...routeComponents],
  imports: [
    CommonModule, 
    StudentDetailsRoutingModule,
    MDBBootstrapModule,
  ],
})
export class StudentDetailsModule {}
