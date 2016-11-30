import { Component } from '@angular/core';
import { PrivateService } from '../services/private.service';

@Component({
  selector: 'other-lazy',
  template: `<div><h1>Other Lazy</h1><button (click)="incr()">Increment</button><div>{{ps.getId()}}</div></div>`
})
export class OtherLazyComponent {

  constructor(private ps : PrivateService) {

  }

  incr() {
    this.ps.incr();
  }
}
