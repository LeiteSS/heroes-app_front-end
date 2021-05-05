import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private baseUrl = 'https://still-ocean.herokuapp.com/api/v1/heroes';

  constructor(private http: HttpClient) { }

  getHeroes() : Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
