import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularTechComponent } from './angular-tech/angular-tech.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'angular-tech', component: AngularTechComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
