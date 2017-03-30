import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OtherLazyComponent } from './otherlazy.component';
import { PrivateService } from '../services/private.service';
import { CommonService } from '../services/common.service';

const routerConfig = [
  {
    path: "",
    component: OtherLazyComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routerConfig) ],
  declarations: [ OtherLazyComponent ],
  exports: [ OtherLazyComponent ],
  providers: [ PrivateService, CommonService ]
})
export class OtherLazyModule {

  constructor() {
    console.log("other lazy module constructor ")
  }

}
