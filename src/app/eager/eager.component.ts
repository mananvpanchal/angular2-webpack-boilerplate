import { Component } from '@angular/core';

import { CommonService } from '../services/common.service';
import { EagerService } from '../services/eager.service';

@Component({
  selector: 'eager',
  template: `<div><h1>Eager</h1><button (click)="incr()">Increment</button>
  <div>Common: {{cs.getId()}}</div>
  <div>Eager: {{es.getId()}}</div>
  </div>`
})
export class EagerComponent {
  constructor(private cs : CommonService, private es : EagerService) {
    console.log('eager constructor');
  }

  incr() {
    this.cs.incr();
    this.es.incr();
  }
}
