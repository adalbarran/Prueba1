import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = 'https://dummyjson.com';

  constructor(
    private http: HttpClient
  ) { }

  getApi():Observable<any>{
    return this.http.get(`${this.BASE_URL}/users`);
  }
}