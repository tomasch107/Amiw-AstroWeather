import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../Services/weather.service';
import { WeatherResponse } from '../../WeatherResponse/weather-response';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weatherData: WeatherResponse;
  weatherForecast: any;
  city = localStorage.getItem('location');
  dailyWeatherActive: false;
  fiveDaysActive: false;
  show = true;
  loading = true;
  isModalVisible = false;
  errorMessage = '';
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    if (this.city == null) {
      this.city = 'Katowice';
    }
    this.getWeather(this.city);
  }
  getWeather(location: string) {
    this.getWeatherForecast(location);
    this.getCurrentWeather(location);
  }
  getCurrentWeather(location: string) {
    this.weatherService.getWeatherByLocation(location).subscribe(response => {
      this.loading = false;
      this.weatherData = response;
      this.resetChildForm();
      localStorage.setItem('location', location);
    }, err => {
      console.log('HTTP Error', err.error, this.isModalVisible);
      this.errorMessage = err.error.message;
      this.isModalVisible = true;
  }, () => console.log('HTTP request completed.')
  );
  }

  getWeatherForecast(location: string)  {
    this.weatherService.get5DaysWeatherByLocation(location).subscribe(response => {
      this.loading = false;
      this.weatherForecast = response;
      this.resetChildForm();
      localStorage.setItem('location', location);
    }, err => {
      console.log('HTTP Error', err.error, this.isModalVisible);
      this.errorMessage = err.error.message;
      this.isModalVisible = true;
  }, () => console.log('HTTP request completed.')
  );
  }

resetChildForm(){
   this.show = false;

   setTimeout(() => {
      this.show = true;
    }, 100);
}
}
