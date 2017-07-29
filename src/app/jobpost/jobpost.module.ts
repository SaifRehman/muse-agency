import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobpostCreateComponent} from './jobpost-create/jobpost-create.component'
import {JobpostViewComponent} from './jobpost-view/jobpost-view.component'
import {JobpostService} from './jobpost.service';
import {RouterModule} from '@angular/router';
import {jobpostRoutes} from './jobpost.routes';
import {FormsModule} from '@angular/forms';
import { NvD3Component } from 'ng2-nvd3';
import { ChartModule } from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(jobpostRoutes),
    FormsModule,
    ChartModule,
  ],
  declarations: [
    JobpostCreateComponent,
    JobpostViewComponent,
  ],
  exports: [
  ],
  providers: [
    JobpostService,
  ],
})

export class JobpostModule {
}