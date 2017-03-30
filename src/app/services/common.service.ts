import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
  id = 0;

  constructor() {
    console.log('common service constructor');
  }

  incr() {
    this.id++;
  }

  getId() {
    return this.id;
  }
}
