import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class WeatherService {
    constructor(private http: HttpClient) {}

    getFullWeather() {
        return this.http.get(
            'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-8D07548E-B68F-4061-921C-630AEBAA5DB0&sort=time'
        );
    }
}
