import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HumanResourcesRoutingModule } from './human-resources-routing.module';
import { ShiftComponent } from '../shift/shift.component';


@NgModule({
  declarations: [
    ShiftComponent
  ],
  imports: [
    CommonModule,
    HumanResourcesRoutingModule
  ]
})
export class HumanResourcesModule { }
