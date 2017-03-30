import { Component } from '@angular/core';
import { PrivateService } from '../services/private.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'otherlazy',
  template: `<div><h1>Other Lazy</h1><button (click)="incr()">Increment</button>
  <div>Common: {{cs.getId()}}</div>
  <div>Private: {{ps.getId()}}</div>
  </div>`
})
export class OtherLazyComponent {

  constructor(private cs : CommonService, private ps : PrivateService) {
    console.log('other lazy constructor');
  }

  incr() {
    this.ps.incr();
    this.cs.incr();
  }
}
