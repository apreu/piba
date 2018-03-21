import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MisticaPage } from './mistica';

@NgModule({
  declarations: [
    MisticaPage,
  ],
  imports: [
    IonicPageModule.forChild(MisticaPage),
  ],
})
export class MisticaPageModule {}
