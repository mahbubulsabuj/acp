import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryCode } from 'src/app/models/country-code.model';
import { Country } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  salutations: string[] = ['Mr.', 'Mrs.', 'Miss', 'Dr.', 'Prof.'];
  genders: string[] = ['Male', 'Female', 'Other', 'Not Specified'];
  roles: string[] = ['Admin', 'Country Manager', 'Site Editor'];
  regions: string[] = [
    'Africa',
    'Asia',
    'Caribbean',
    'Central America',
    'Europe',
    'North America',
    'Oceania',
    'South America',
  ];
  countries: Country[] = [];
  countriesCode: CountryCode[] = [];
  userForm: FormGroup = new FormGroup({
    prefix: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    displayName: new FormControl('', Validators.required),
    gender: new FormControl('Not Specified', Validators.required),
    birthDate: new FormControl('', Validators.required),
    nationality: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    region: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });
  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    this._getCountries();
    this._getCountriesCode();
  }
  private _getCountries() {
    this.countriesService
      .getCountries()
      .pipe(take(1))
      .subscribe((countries) => {
        this.countries = countries;
      });
  }
  private _getCountriesCode() {
    this.countriesService
      .getCountriesCode()
      .pipe(take(1))
      .subscribe((countriesCode) => {
        this.countriesCode = countriesCode;
      });
  }

}
