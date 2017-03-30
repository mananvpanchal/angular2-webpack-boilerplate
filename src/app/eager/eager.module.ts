import { NgModule } from '@angular/core';

import { EagerComponent } from './eager.component';
import { EagerService } from '../services/eager.service';

@NgModule({
  declarations: [ EagerComponent ],
  exports: [ EagerComponent ],
  providers: [ EagerService ]
})
export class EagerModule {

}
