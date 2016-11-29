import { NgModule } from '@angular/core';

import { NonLazyComponent } from './nonlazy.component';

@NgModule({
  declarations: [NonLazyComponent],
  exports: [NonLazyComponent]
})
export class NonLazyModule {

}
