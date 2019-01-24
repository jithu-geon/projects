import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainerComponent } from './main-container/main-container.component';
import { ContentModule } from '@app/content';

@NgModule({
  imports: [CommonModule, ContentModule],
  declarations: [MainContainerComponent],
  exports: [MainContainerComponent]
})
export class ContainerModule {}
