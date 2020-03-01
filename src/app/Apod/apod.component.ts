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
  todaysDate: string;
  apod: Apod;
  date: Date;
  loading = true;
  errorMessage='';
  isModalVisible = false;
  constructor(private apodService: APODService) { }

  ngOnInit() {
    this.apodService.getApod().subscribe(response => {
      this.apod = response;
      this.loading=false;
    });

    this.setTodaysDate();
  }

  getNewApod(){
    if(this.date <= new Date()){
      this.loading=true;
      this.apodService.getApodByDate(moment(this.date).format().toString().substring(0, 10)).subscribe(response => {
        this.apod = response;
        this.loading=false;
      },err => {console.log('HTTP Error', err.error.msg, this.isModalVisible);
          this.errorMessage=err.error.msg;
          this.isModalVisible=true;
      },
      () => console.log('HTTP request completed.')
      );
    }
  }

  setTodaysDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    this.todaysDate = yyyy + '-' + mm + '-' + dd;
  }
}
