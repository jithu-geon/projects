import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/material';
import { ContainerModule } from '@app/container';
// import { SideNavModule } from '@app/side-nav';
// import { FooterModule } from '@app/footer';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    MaterialModule,
    ContainerModule,
    // SideNavModule,
    // FooterModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
