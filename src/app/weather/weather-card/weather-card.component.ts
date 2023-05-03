import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';

@Component({
    selector: 'app-weather-card',
    templateUrl: './weather-card.component.html',
    styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
    myWeather: any;
    safeUrl: any;

    constructor(private weatherService: WeatherService) {}
    ngOnInit(): void {
        this.weatherService.getFullWeather().subscribe({
            next: (res: any) => {
                this.myWeather = res.records.location;
            },

            error: (err: any) => console.log(err.message),

            complete: () => console.info('API Called Completed :)'),
        });
    }
}
