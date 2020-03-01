import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Apod } from '../Apod/apod';

const api = 'https://api.nasa.gov/planetary/apod';
const apiKey = 'lllbvQ4lqj5ezit62mrTIkY0R3XCFIMq0WbZYEYO';
@Injectable({
  providedIn: 'root'
})
export class APODService {

  constructor(private http: HttpClient) {
  }

  getApod(): Observable<Apod> {
    return this.http.get<Apod>(api + '?api_key=' + apiKey);
  }

  getApodByDate(date: string): Observable<Apod>{
    return this.http.get<Apod>(api + '?api_key=' + apiKey + '&date=' + date);
  }
}
