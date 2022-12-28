import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  server_url = 'https://api-football-standings.azharimm.dev/leagues/bra.1/standings';

  constructor(private http: HttpClient ) { }

  public getProduct() {
    return this.http.get(`${this.server_url}`)
  }
}
