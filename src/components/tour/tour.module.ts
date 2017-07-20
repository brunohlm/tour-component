import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TourComponent } from './tour-component';

@NgModule({
  declarations: [
    TourComponent,
  ],
  imports: [
    IonicPageModule.forChild(TourComponent),
  ],
  exports: [
    TourComponent
  ]
})
export class TourComponentModule {
}
