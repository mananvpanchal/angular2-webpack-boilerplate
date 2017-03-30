import { Injectable } from '@angular/core';

@Injectable()
export class PrivateService {
  id = 0;

  constructor() {
    console.log('private service constructor');
  }

  incr() {
    this.id++;
  }

  getId() {
    return this.id;
  }
}
