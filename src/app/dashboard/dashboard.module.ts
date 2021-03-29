import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DataService } from '../services/data.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule],
  providers: [DataService],
})
export class DashboardModule {}
