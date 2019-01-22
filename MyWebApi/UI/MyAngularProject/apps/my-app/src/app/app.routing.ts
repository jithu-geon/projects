import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [ 
    // LoginViewComponent, HomeViewComponent, CatalogViewComponent
  ],
  imports: [
    RouterModule.forRoot([
      // { path: 'sample', component: SampleContainerComponent },
      // { path: 'home', component: SampleContainerComponent }
      
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}
