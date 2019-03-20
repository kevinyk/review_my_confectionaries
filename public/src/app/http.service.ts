import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }
  getCakes(){
    return this._http.get('/api/cakes');
  }
  postCake(cakeObj){
    return this._http.post('/api/cakes', cakeObj);
  }

}
