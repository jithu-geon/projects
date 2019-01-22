import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatTableModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatCardModule],
  exports: [MatCardModule,  MatTableModule]
})
export class MaterialModule {}
