import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {
  isLogin: boolean;

  constructor(private headerService: HeaderService) {
    this.isLogin = false;
  }

  ngOnInit() {
    this.headerService.change.subscribe(isLogin => {
      this.isLogin = isLogin;
    });
  }
}
