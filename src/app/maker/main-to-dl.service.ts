import { IconInfo } from './main-page/main-page.component';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainToDlService {
  private infoStore: BehaviorSubject<IconInfo>;

  constructor() { }

  export(info: IconInfo) {
    if (!this.infoStore) { this.infoStore = new BehaviorSubject(info); }
    else { this.infoStore.next(info); }
  }

  import() {
    return this.infoStore.asObservable();
  }
}
