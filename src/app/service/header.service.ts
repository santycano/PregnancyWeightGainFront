import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HeaderService {
  isLogin = false;

  @Output()
  change: EventEmitter<boolean> = new EventEmitter();

  login() {
    this.isLogin = true;
    console.log('header service is called');
    this.change.emit(this.isLogin);
  }
}
