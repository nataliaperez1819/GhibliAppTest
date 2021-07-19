import { Injectable } from '@angular/core';
import { Character } from '../model/character';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private url = 'https://ghibliapi.herokuapp.com/people';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.url);
  }
}
