import { Component } from '@angular/core';

import { CommonService } from '../services/common.service';

@Component({
  selector: 'non-lazy',
  template: `<div><h1>Non Lazy</h1><button (click)="incr()">Increment</button><div>{{cs.getId()}}</div></div>`
})
export class NonLazyComponent {
  constructor(private cs : CommonService) {

  }

  incr() {
    this.cs.incr();
  }
}
