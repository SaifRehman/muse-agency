import {Routes} from '@angular/router';
import {JobpostCreateComponent} from './jobpost-create/jobpost-create.component'
import {JobpostViewComponent} from './jobpost-view/jobpost-view.component'

export const jobpostRoutes: Routes = [
  {path: 'create', component: JobpostCreateComponent},
  {path: 'view', component: JobpostViewComponent},
];
