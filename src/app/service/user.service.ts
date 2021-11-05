import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  serverPrefix: string;

  constructor(private http: HttpClient) {
    this.serverPrefix = 'http://localhost:3000';
  }

  login(user: User) {
    const url = this.serverPrefix + '/api/login';
    return this.http.post(url, user).pipe(
      map(u => {
        if (u) {
          localStorage.setItem('currentUser', JSON.stringify(u));
        }
        return u;
      })
    );
  }

  register(user: User) {
    const url = this.serverPrefix + '/api/register';
    return this.http.post(url, user);
  }
}
