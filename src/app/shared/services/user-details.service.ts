import { Injectable } from '@angular/core';
import { Http, RequestOptions , Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UserDetailsService {
  private headers = new Headers({ 'Content-type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http ) { }

  getUSser() {
    return this.http.get('/api/users')
      .map(response => response.json());
  }
  createUser(data) {
    return this.http.post('/api/register', JSON.stringify(data), this.options).map(
      (res) =>
        res.text()
    );
  }
  
  signin(data) {
    return this.http.post('/api/signin', JSON.stringify(data), this.options).map(
      (res) =>
        res.json()
    );
  }

}
