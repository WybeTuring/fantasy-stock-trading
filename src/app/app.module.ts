import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClarityModule } from 'clarity-angular';
import { CurrencyPipe } from '@angular/common';
import { AccountService } from './services/account.service';

import { AppComponent } from './app.component';
import { InvestmentsComponent } from './investments/investments.component';
import { TickerComponent } from './ticker/ticker.component';
import { StocksComponent } from './stocks/stocks.component';
import { AlertComponent } from './alert/alert.component';

import { AlertService } from './services/alert.service';
import { LocalStorageService } from './services/local-storage.service';
import { StocksService } from './services/stocks.service';
import { HttpClient } from '@angular/common/http';
import { StocksInterceptor } from './services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
        InvestmentsComponent,
        TickerComponent,
        StocksComponent,
        AlertComponent,
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ClarityModule,
  ],
  providers: [
        AlertService,
        LocalStorageService,
        CurrencyPipe,
        AccountService,
        HttpClient,
        StocksService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: StocksInterceptor,
          multi: true
        }
       ],
  bootstrap: [AppComponent]
})
export class AppModule { }
