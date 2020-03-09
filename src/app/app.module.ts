import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApodComponent } from './apod/apod.component';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WeatherComponent } from './Weather/weather/weather.component';
import { DailyComponent } from './Weather/daily/daily.component';
import { FiveDaysWeatherComponent } from './Weather/five-days-weather/five-days-weather.component';
import { HourlyWeatherComponent } from './Weather/hourly-weather/hourly-weather.component';
@NgModule({
  declarations: [
    AppComponent,
    ApodComponent,
    WeatherComponent,
    DailyComponent,
    FiveDaysWeatherComponent,
    HourlyWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ClarityModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
