import { Component } from '@angular/core';
import { PrivateService } from '../services/private.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'lazy',
  template: `<div>
            <h1>Lazy</h1><button (click)="incr()">Increment</button>
            <div>Common: {{cs.getId()}}</div>
            <div>Private: {{ps.getId()}}</div>
            </div>`
})
export class LazyComponent {

  constructor(private cs : CommonService, private ps : PrivateService) {
    console.log('lazy constructor');
  }

  incr() {
    this.ps.incr();
    this.cs.incr();
  }
}
