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
  iconMap: Map<string, string> = new Map();
  constructor() { }

  ngOnInit(): void {
    this.prepareIconMap();
    this.setIconClass(this.weatherData.weather[0].icon);
  }

  prepareIconMap() {
    this.iconMap.set('11d', 'storm');
    this.iconMap.set('09d', 'cloudsRain');
    this.iconMap.set('10d', 'sunCloudsRain');
    this.iconMap.set('13d', 'snow');
    this.iconMap.set('50d', 'sunMist');
    this.iconMap.set('01d', 'sun');
    this.iconMap.set('02d', 'sunClouds');
    this.iconMap.set('03d', 'clouds');
    this.iconMap.set('04d', 'clouds');
    this.iconMap.set('11n', 'storm');
    this.iconMap.set('09n', 'moonCloudsRain');
    this.iconMap.set('10n', 'sunCloudsRain');
    this.iconMap.set('13n', 'snow');
    this.iconMap.set('50n', 'moonMist');
    this.iconMap.set('01n', 'moon');
    this.iconMap.set('02n', 'moonClouds');
    this.iconMap.set('03n', 'clouds');
    this.iconMap.set('04n', 'clouds');
  }

  setIconClass(apiIcon: string) {
    this.weatherIconClass = this.iconMap.get(apiIcon);
  }
}
