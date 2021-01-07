import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData(){
    return this.http.get('https://wmrd-528d6.firebaseio.com/.json').map(
      (res) => res.json()
    );
  }
}
