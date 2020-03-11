import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApodComponent } from './apod/apod.component';
import { WeatherComponent } from './Weather/weather/weather.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [{
  path: 'apod',
  component: ApodComponent,
},
{
  path: 'weather',
  component: WeatherComponent,
},
{
  path: 'main',
  component: MainComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
