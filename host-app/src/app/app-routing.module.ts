import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'angular-tech-mfe',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4300/remoteEntry.js',
        exposedModule: './AngularTechModule',
        type: 'module'
      }).then(m => m.AngularTechModule)
  },
  {
    path: 'angular-tech-mfe/:data',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4300/remoteEntry.js',
        exposedModule: './AngularTechModule',
        type: 'module'
      }).then(m => m.AngularTechModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
