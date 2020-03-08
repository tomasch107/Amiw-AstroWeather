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
  city = localStorage.getItem('location');
  dailyWeatherActive: false;
  fiveDaysActive: false;
  show = true;
  loading = true;
  isModalVisible = false;
  errorMessage = '';
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
      this.weatherService.getWeatherByLocation(this.city).subscribe(response => {
        this.loading = false;
        this.weatherData = response;
        this.resetChildForm();
      }, err => {
        console.log('HTTP Error', err.error, this.isModalVisible);
        this.errorMessage = err.error.message;
        this.isModalVisible = true;
    }, () => console.log('HTTP request completed.')
    );
  }

  getWeatherData(location: string) {
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

resetChildForm(){
   this.show = false;

   setTimeout(() => {
      this.show = true;
    }, 100);
}
}
