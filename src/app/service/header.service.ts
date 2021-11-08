import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HeaderService {

  // tslint:disable-next-line:no-output-native
  @Output()
  change: EventEmitter<boolean> = new EventEmitter();
  private isLogin: boolean;

  login() {
    this.isLogin = true;
    console.log('header service is called');
    this.change.emit(this.isLogin);
  }
}
