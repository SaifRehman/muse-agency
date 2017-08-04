import {Routes} from '@angular/router';
import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';

export const appRoutes: Routes = [{
    // Hand controller over to the appropriate module
    path: '', component: AdminLayoutComponent, children: [
        {path: 'advisor', loadChildren: 'app/advisor/advisor.module#AdvisorModule'},
        {path: 'group', loadChildren: 'app/group/group.module#GroupModule'},
        {path: 'jobpost', loadChildren: 'app/jobpost/jobpost.module#JobpostModule'},
        {path: 'guardian', loadChildren: 'app/guardian/guardian.module#GuardianModule'},
        {path: 'student', loadChildren: 'app/student/student.module#StudentModule'},
        {path: 'university', loadChildren: 'app/university/university.module#UniversityModule'},
        {path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'},
    ]
},
    // General matches
    {path: '', redirectTo: 'jobpost', pathMatch: 'full'},
    {path: '**', redirectTo: 'jobpost', pathMatch: 'full'},
];
