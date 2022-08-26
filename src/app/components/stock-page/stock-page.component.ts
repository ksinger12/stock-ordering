
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-stock-page',
  templateUrl: './stock-page.component.html',
  styleUrls: ['./stock-page.component.css']
})


export class StockPageComponent implements OnInit {
  quoteData
  symbol
  constructor(private router: ActivatedRoute, private http:HttpClient) { }

  ngOnInit() {
    console.log("VALUE PASSED" + this.router.snapshot.params.symbol)
    this.symbol = this.router.snapshot.params.symbol
    this.getQuoteData();
  }

  getQuoteData() {
    const getData = new GetDataService(this.http);
    getData.getStockQuote(this.symbol).subscribe(data => {
      this.quoteData = data
    })

  }
}