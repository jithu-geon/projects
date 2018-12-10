
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '@app/material';
        
        @NgModule({
          imports: [
            CommonModule,
            MaterialModule
          ],
          exports: [DashboardComponent],
          declarations: [DashboardComponent]
        })
        export class ContainerModule { }
        