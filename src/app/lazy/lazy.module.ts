import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LazyComponent } from './lazy.component';
import { PrivateService } from '../services/private.service';

const routerConfig = [
  {
    path: "",
    component: LazyComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routerConfig) ],
  declarations: [ LazyComponent ],
  exports: [ LazyComponent ],
  providers: [ PrivateService ]
})
export default class LazyModule {

}
