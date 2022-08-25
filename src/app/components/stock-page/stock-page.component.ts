
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';


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