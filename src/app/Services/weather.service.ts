import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {WeatherResponse} from '../WeatherResponse/weather-response';

const api = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = '06d82af960036ad066c4c984d43c53ec';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {
  }
  getWeatherByLocation(location: string): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(api + '?q=' + location + '&units=metric&APPID=' + apiKey);
  }
}
