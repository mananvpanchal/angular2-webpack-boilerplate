import { Injectable } from '@angular/core';

@Injectable()
export class EagerService {
  id = 0;

  constructor() {
    console.log('eager service constructor');
  }

  incr() {
    this.id++;
  }

  getId() {
    return this.id;
  }
}
