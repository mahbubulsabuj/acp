import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CountryCode } from '../models/country-code.model';
import { Country } from '../models/country.model';
@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}
  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${environment.countriesAPI}`);
  }
  getCountriesCode(): Observable<CountryCode[]> {
    return this.http.get<CountryCode[]>('assets/json/CountryCodes.json');
  }
}
