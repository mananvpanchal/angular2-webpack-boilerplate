import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LazyComponent } from './lazy.component';
import { OtherLazyComponent } from './otherlazy.component';
import { PrivateService } from '../services/private.service';

const routerConfig = [
  {
    path: "",
    component: LazyComponent
  },
  {
    path: "otherlazy",
    component: OtherLazyComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routerConfig) ],
  declarations: [ LazyComponent, OtherLazyComponent ],
  exports: [ LazyComponent, OtherLazyComponent ],
  providers: [ PrivateService ]
})
export class LazyModule {

}
