import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  constructor(private http: HttpClient) {}

  private userData = JSON.parse(localStorage.getItem('currentUser'));
  private recordData = JSON.parse(localStorage.getItem('currentRecord'));
  private url = 'https://api-rest-curva.herokuapp.com/api/record';

  addRecord(idUser: any, weeks: Array<any>, preWeight: any, inputdata: Array<any>){
    const headers = { 'x-auth-token': this.userData[1] };
    // tslint:disable-next-line:max-line-length
    const body = {userId: this.userData[0]._id , registerId: idUser, week: weeks, pregestationalWeight: preWeight, weight: inputdata};
    return this.http.post<any>(this.url, body, { headers });
  }

  updateRecord(weeks: Array<any>, inputdata: Array<any>){
    const headers = { 'x-auth-token': this.userData[1] };
    this.recordData = JSON.parse(localStorage.getItem('currentRecord'));
    // tslint:disable-next-line:max-line-length
    const body = {userId: this.recordData[0].userId , registerId: this.recordData[0].registerId, week: weeks, pregestationalWeight: this.recordData[0].pregestationalWeight, weight: inputdata};
    return this.http.put<any>(this.url, body, { headers, params: { id: this.recordData[0]._id } });
  }

  getRecord(idUser: any) {
    localStorage.removeItem('currentRecord');
    // tslint:disable-next-line:max-line-length
    return this.http.get(this.url, {headers: {'x-auth-token': this.userData[1]}, params: {userId: this.userData[0]._id, registerId: idUser}}).pipe(
      map(u => {
        if (u) {
          localStorage.setItem('currentRecord', JSON.stringify(u));
        }
        return u;
      })
    );
  }
}
