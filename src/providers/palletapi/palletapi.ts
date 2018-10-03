import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the PalletapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PalletapiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PalletapiProvider Provider');
  }
  term: any;
  baseUrl: string = 'http://localhost:4000/loadNo';
  queryUrl: string = '?loadNo=';


  getPallet(term) {
    return this.http.get(this.baseUrl + this.queryUrl + term)
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
