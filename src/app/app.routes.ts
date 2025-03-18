import { Routes } from '@angular/router';
<<<<<<< HEAD

export const routes: Routes = [];
=======
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamComponent } from './team/team.component';
import { ProjectsComponent } from './projects/projects.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ReportsComponent } from './reports/reports.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'team', component: TeamComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'calendar', component: CalendarComponent},
    {path: 'reports', component: ReportsComponent}
];
>>>>>>> ecea6a4 (Pushed Angular UMS project)
