import { Injectable } from '@angular/core';

@Injectable()
export class PrivateService {
  id = 0;

  incr() {
    this.id++;
  }

  getId() {
    return this.id;
  }
}
