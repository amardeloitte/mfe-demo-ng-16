import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularTechRoutingModule } from './angular-tech-routing.module';
import { AngularTechComponent } from './angular-tech.component';


@NgModule({
  declarations: [
    AngularTechComponent
  ],
  imports: [
    CommonModule,
    AngularTechRoutingModule
  ]
})
export class AngularTechModule { }
