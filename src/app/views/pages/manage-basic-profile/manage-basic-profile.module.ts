import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { FeatherIconModule } from 'src/app/core/feather-icon/feather-icon.module';
import { NgbDropdownModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http'
// Ng-ApexCharts
import { NgApexchartsModule } from "ng-apexcharts";

import { ManageBasicProfileComponent } from './manage-basic-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ManageBasicProfileComponent
  }
]

@NgModule({
  declarations: [ManageBasicProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    FeatherIconModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    NgApexchartsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ManageBasicProfileModule { }
