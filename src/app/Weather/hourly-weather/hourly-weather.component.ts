import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.scss']
})
export class HourlyWeatherComponent implements OnInit {
  @Input() hourlyWeather: any;
  date: Date;
  minutes: any;
  day: string;
  weatherIconClass: string;
  iconMap: Map<string, string> = new Map();
  constructor() { }

  ngOnInit(): void {
    this.convertTimestamp();
    this.prepareIconMap();
    this.setIconClass(this.hourlyWeather.weather[0].icon);
  }

  convertTimestamp() {
    this.date = new Date(this.hourlyWeather.dt * 1000);
    const minutes = '0' + this.date.getMinutes();
    this.minutes = minutes.substr(-2);
    this.day = moment(this.date).format('dddd');
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
