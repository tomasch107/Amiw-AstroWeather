import { Component, OnInit, Input} from '@angular/core';
import * as Chart from 'chart.js';
import * as moment from 'moment';

@Component({
  selector: 'app-five-days-weather',
  templateUrl: './five-days-weather.component.html',
  styleUrls: ['./five-days-weather.component.scss']
})
export class FiveDaysWeatherComponent implements OnInit {
  canvas: any;
  ctx: any;
  temperature: any;
  labels: any;
  humidity: any;
  @Input() weatherForecast: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.weatherForecast.list[0].dt);
    this.getChartData();
    this.renderChart();
  }

  renderChart(){
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
          labels: this.labels,
          datasets: [{
              label: 'Temperature',
              data: this.temperature,
              fill: false,
              borderColor: [
                  'rgba(255, 99, 132, 1)'
              ],
              borderWidth: 3
          },
          {
            label: 'Humidity',
            data: this.humidity,
            fill: false,
            borderColor: [
                'rgba(63, 63, 191, 1)'
            ],
            borderWidth: 3
        }]
      },
      options: {
        responsive: true,
        display:true
      }
    });
  }
  getChartData() {
    let numbers = new Array();
    let labels = new Array();
    let humidity = new Array();
    this.weatherForecast.list.forEach(element => {
      numbers.push(element.main.temp);
      labels.push(this.convertTimestamp(element));
      humidity.push(element.main.humidity);
    });
    this.temperature = numbers;
    this.labels = labels;
    this.humidity = humidity;
  }

  convertTimestamp(element: any) :string {
    let date = new Date(element.dt * 1000);
    return moment(date).format('lll');
  }
}

