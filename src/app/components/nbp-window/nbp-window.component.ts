import { Component, OnInit } from '@angular/core';
import { CurrencyRate } from 'src/app/models/currency-rate';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'wsb-nbp-window',
  templateUrl: './nbp-window.component.html',
  styleUrls: ['./nbp-window.component.scss']
})
export class NbpWindowComponent implements OnInit {

  currency: string = '';
  currencyRate: CurrencyRate | undefined;
  pln: number = 0;

  get rate(): number {
    if (this.currencyRate) {
      return this.currencyRate.rates[0].mid;
    } else {
      return 0;
    }
  }

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  getRates() {
    this.api.getRates(this.currency).subscribe((currencyRate: CurrencyRate) => {
      this.currencyRate = currencyRate;
    });
  }

}
