import { Component } from '@angular/core';

import { CommonService } from '../services/common.service';

@Component({
  selector: 'eager',
  template: `<div><h1>Eager</h1><button (click)="incr()">Increment</button><div>{{cs.getId()}}</div></div>`
})
export class EagerComponent {
  constructor(private cs : CommonService) {

  }

  incr() {
    this.cs.incr();
  }
}
