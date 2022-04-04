import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CurrencyRate } from '../models/currency-rate';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getRates(currencyCode: string) {
    return this.http.get<CurrencyRate>(`${environment.apiUrl}${currencyCode}`);
  }
}
