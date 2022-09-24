import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {global} from './GLOBAL'
import{Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})




export class UserService {
  public url;
    constructor(private _http:HttpClient) {
      this.url =global.url;
    }
    login(user:any, gethash=null): Observable<any> {
      if(gethash!= null) {
        user.gethash = gethash;
      }
      let json = JSON.stringify(user);
      const headers = new HttpHeaders().set('content-Type', 'application/json');
      return this._http.post(this.url +'login', json, {headers: headers})
  
    }
  }