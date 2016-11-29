import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { NonLazyModule } from './nonlazy/nonlazy.module';
import { NonLazyComponent } from './nonlazy/nonlazy.component';
import { CommonService } from './services/common.service';

const routerConfig = [
    {
      path: "nonlazy",
      component: NonLazyComponent
    },
    {
      path: "lazy",
      loadChildren: "./lazy/lazy.module"
    }
];

@NgModule({
  imports: [ BrowserModule, RouterModule, RouterModule.forRoot(routerConfig), NonLazyModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [ CommonService ]
})
export class AppModule { }
