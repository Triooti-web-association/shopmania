import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { CountryDto } from './../model/country';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';
=======
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { CountryDto } from './../model/country';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
>>>>>>> fe94572c9638c8e06de7d9c13b39951e9604e6c5

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  apiServerUrl = environment.apiBaseUrl;

  //apiServerUrl = "https://businesse-admin.herokuapp.com/shop-mania/v1";
<<<<<<< HEAD
=======

  public choixmenu : string  = 'A';

  public dataForm:  FormGroup;
>>>>>>> fe94572c9638c8e06de7d9c13b39951e9604e6c5

  constructor(private http: HttpClient) {
  }

  /***************************** CountryDTO    *************/

  public getCountryDTOs(): Observable<CountryDto[]> {
    return this.http.get<CountryDto[]>(`${this.apiServerUrl}/countries/all`);
  }

  public getAllCountryDTOsOrderByIdDesc(): Observable<CountryDto[]> {
    return this.http.get<CountryDto[]>(`${this.apiServerUrl}/countries/searchAllCountryOrderByIdDesc`);
  }

  public getCountryDtoById(countId: number): Observable<CountryDto> {
    return this.http.get<CountryDto>(`${this.apiServerUrl}/countries/findById/${countId}`);
  }

  public getCountryDtoByDesignation(designation: string): Observable<CountryDto> {
    return this.http.get<CountryDto>(`${this.apiServerUrl}/countries/${designation}`);
  }

  public addCountryDto(countryDto: CountryDto): Observable<CountryDto> {
    return this.http.post<CountryDto>(`${this.apiServerUrl}/countries/create`, countryDto);
  }

  public updateCountryDto(categoryId: number, countryDto: CountryDto): Observable<CountryDto> {
    return this.http.put<CountryDto>(`${this.apiServerUrl}/countries/update/${categoryId}`, countryDto);
  }

  public deleteCountryDto(countId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/countries/delete/${countId}`);
  }

}
