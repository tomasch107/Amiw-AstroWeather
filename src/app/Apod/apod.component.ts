import { Component, OnInit } from '@angular/core';
import { APODService } from '../Services/apod.service';
import { Apod } from './apod';
import * as moment from 'moment';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';


@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {
  apod: Apod;
  date: Date;
  constructor(private apodService: APODService) { }

  ngOnInit() {
    this.apodService.getApod().subscribe(response => this.apod = response);
  }

  getNewApod(){
    if(this.date <= new Date()){
      this.apodService.getApodByDate(moment(this.date).format().toString().substring(0, 10)).subscribe(response => this.apod = response);
    }
  }

  getTodaysDate(){
    var todaysDate = new Date();
    console.log(todaysDate.getFullYear()+'-'+todaysDate.getMonth()+'-'+todaysDate.getDay());
    return todaysDate.getFullYear()+'-'+todaysDate.getMonth()+'-'+todaysDate.getDay();
  }
}
