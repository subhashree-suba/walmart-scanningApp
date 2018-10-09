import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

/*
  Generated class for the LoadapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoadapiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoadapiProvider Provider');
  }

  getLoad() {
    return this.http.get('http://localhost:3000/load')
    .do(this.logResponse)
    .map(this.extractData)
    .catch(this.catchError)
  }
 
  private catchError(error){
    console.log(error);
    return Observable.throw(error || "Server error.");
  }
 
  private logResponse(res) {
    // console.log(res);
  }
 
  private extractData(res){
    return res;
  }

}
