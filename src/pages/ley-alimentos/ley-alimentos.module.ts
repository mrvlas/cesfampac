import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeyAlimentosPage } from './ley-alimentos';

@NgModule({
  declarations: [
    LeyAlimentosPage,
  ],
  imports: [
    IonicPageModule.forChild(LeyAlimentosPage),
  ],
})
export class LeyAlimentosPageModule {}
