import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
  id = 0;

  incr() {
    this.id++;
  }
  
  getId() {
    return this.id;
  }
}
