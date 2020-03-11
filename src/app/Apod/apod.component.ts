import { Component, OnInit } from '@angular/core';
import { APODService } from '../Services/apod.service';
import { Apod } from './apod';
import * as moment from 'moment';

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
  constructor(private apodService: APODService) {}

  ngOnInit() {
    this.apodService.getApod().subscribe(response => {
      this.apod = response;
      this.loading=false;
    });
    this.setTodaysDate();
  }

  getNewApod(){
      this.loading=true;
      this.apodService.getApodByDate(moment(this.date).format().toString().substring(0, 10)).subscribe(response => {
        this.apod = response;
        this.loading=false;
        },err => {
          console.log('HTTP Error', err.error, this.isModalVisible);
          this.errorMessage=err.error.msg;
          this.isModalVisible=true;
    },() => console.log('HTTP request completed.')
    );
  }

  setTodaysDate(){
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    this.todaysDate = yyyy + '-' + mm + '-' + dd;
  }
}
