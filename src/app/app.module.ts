import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { EagerModule } from './eager/eager.module';
import { EagerComponent } from './eager/eager.component';
//import { CommonService } from './services/common.service';

const routerConfig = [
    {
      path: "eager",
      component: EagerComponent
    },
    {
      path: "lazy",
      loadChildren: "./lazy/lazy.module#LazyModule"
    },
    {
      path: "otherlazy",
      loadChildren: "./otherlazy/otherlazy.module#OtherLazyModule"
    }
];

@NgModule({
  imports: [ BrowserModule, RouterModule, RouterModule.forRoot(routerConfig), EagerModule ],
  declarations: [ AppComponent ],
   bootstrap: [ AppComponent ]
  // providers: [ CommonService ]
})
export class AppModule { }
