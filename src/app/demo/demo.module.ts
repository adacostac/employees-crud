import { NgModule } from '@angular/core';
import { DemoComponent } from './demo.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [ SharedModule ],
  declarations: [ DemoComponent ],
  exports: [ DemoComponent ]
})
export class DemoModule { }
