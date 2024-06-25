import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HumanResourcesRoutingModule } from './human-resources-routing.module';
import { ShiftComponent } from '../human-resources/shift/shift.component';
import { MaterialModule } from '../material/material.module';
import { AddDialogComponent } from './shift/dialogs/add/add.dialog.component';
import { EditDialogComponent } from './shift/dialogs/edit/edit.dialog.component';
import { DeleteDialogComponent } from './shift/dialogs/delete/delete.dialog.component';
import { DataService } from './shift/services/data.service';


@NgModule({
  declarations: [
    ShiftComponent,
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent
  ],
  imports: [    
    MaterialModule,
    HumanResourcesRoutingModule
  ],
  providers: [
    DataService
  ]
})
export class HumanResourcesModule { }
