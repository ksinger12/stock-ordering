import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

interface Quote {
  change: number,
  changePercent: number
  error: string,
  high: number,
  data: string,
  low: number,
  open: number,
  prevClose: number,
  price: number,
  symbol: string,
  volume: number
}

@Component({
  selector: 'app-stock-page',
  templateUrl: './stock-page.component.html',
  styleUrls: ['./stock-page.component.css']
})

export class StockPageComponent implements OnInit {
  quoteData
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getQuoteData();
  }

  getQuoteData() {
    const getData = new GetDataService(this.http);
    getData.getStockQuote("MSFT").subscribe(data => {
      this.quoteData = data
    })
  }

}
