import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularTechComponent } from './angular-tech.component';

const routes: Routes = [
  {
    path: "", component: AngularTechComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularTechRoutingModule { }
