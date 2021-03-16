import { Component, Inject, Input } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})

export class StocksComponent {
  @Input() stocks: any;

  constructor(private AccountService: AccountService) {}

  buy(stock:any): void {
    this.AccountService.purchase(stock);
  }

}
