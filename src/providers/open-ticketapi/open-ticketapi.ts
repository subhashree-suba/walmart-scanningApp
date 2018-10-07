import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the OpenTicketapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OpenTicketapiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello OpenTicketapiProvider Provider');
  }

  getTicket() {
    return this.http.get('http://localhost:4002/ticket')
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
 
  extractData(res){
    return res;
  }

}
