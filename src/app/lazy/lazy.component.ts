import { Component } from '@angular/core';
import { PrivateService } from '../services/private.service';

@Component({
  selector: 'lazy',
  template: `<div><h1>Lazy</h1><button (click)="incr()">Increment</button><div>{{ps.getId()}}</div></div>`
})
export class LazyComponent {

  constructor(private ps : PrivateService) {

  }

  incr() {
    this.ps.incr();
  }
}
