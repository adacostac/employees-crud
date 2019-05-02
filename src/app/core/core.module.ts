import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';

@NgModule({
  declarations: [
  HeaderComponent,
  FooterComponent
],
exports: [
  HeaderComponent,
  FooterComponent
]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) { throw new Error('CoreModule already loaded'); }
  }
}
