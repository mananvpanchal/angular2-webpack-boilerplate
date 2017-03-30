import { NgModule } from '@angular/core';

import { EagerComponent } from './eager.component';
import { EagerService } from '../services/eager.service';
import { CommonService } from '../services/common.service';

@NgModule({
  declarations: [ EagerComponent ],
  exports: [ EagerComponent ],
  providers: [ EagerService, CommonService ]
})
export class EagerModule {

}
