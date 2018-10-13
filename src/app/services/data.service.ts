import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private sidenavState = new BehaviorSubject(false);
  currentSideNavState = this.sidenavState.asObservable();

  constructor() { }

  changeData(newSidenavState: boolean) {
    this.sidenavState.next(newSidenavState);
  }
}
