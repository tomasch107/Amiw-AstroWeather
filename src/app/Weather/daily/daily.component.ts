import { Component, OnInit, Input} from '@angular/core';
import { WeatherResponse } from 'src/app/WeatherResponse/weather-response';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss'],
})
export class DailyComponent implements OnInit {
  @Input() weatherData: WeatherResponse;
  weatherIconClass = '';
  constructor() { }

  ngOnInit(): void {
    this.setIconClass(this.weatherData.weather[0].icon);
  }

  setIconClass(apiIcon: string){
    switch (apiIcon) {
      case '11d':
        this.weatherIconClass = 'storm';
        break;
      case '09d':
        this.weatherIconClass = 'cloudsRain';
        break;
      case'10d':
        this.weatherIconClass = 'sunCloudsRain';
        break;
      case '13d':
        this.weatherIconClass = 'snow';
        break;
      case '50d':
        this.weatherIconClass = 'sunMist';
        break;
      case '01d':
        this.weatherIconClass = 'sun';
        break;
      case '02d':
        this.weatherIconClass = 'sunClouds';
        break;
      case '03d':
      case '04d':
        this.weatherIconClass = 'clouds';
        break;
      case '11n':
        this.weatherIconClass = 'storm';
        break;
      case '09n':
        this.weatherIconClass = 'moonCloudsRain';
        break;
      case'10n':
        this.weatherIconClass = 'sunCloudsRain';
        break;
      case '13n':
        this.weatherIconClass = 'snow';
        break;
      case '50n':
        this.weatherIconClass = 'moonMist';
        break;
      case '01n':
        this.weatherIconClass = 'moon';
        break;
      case '02n':
        this.weatherIconClass = 'moonClouds';
        break;
      case '03n':
      case '04n':
        this.weatherIconClass = 'clouds';
        break;
    }
  }
}
