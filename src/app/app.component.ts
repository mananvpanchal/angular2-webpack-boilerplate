import { Component } from '@angular/core';
//import { CommonService } from './services/common.service';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <div>
    <span><a routerLink="eager">Eager</a></span>
    &nbsp;&nbsp;&nbsp;<span><a routerLink="lazy">Lazy</a></span>
    &nbsp;&nbsp;&nbsp;<span><a routerLink="otherlazy">Other Lazy</a></span>
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent {
  name = 'Angular';

  constructor() {

  }
}
