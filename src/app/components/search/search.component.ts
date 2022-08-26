import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResults
  query = null
  router: any;
  symbol
  constructor(private http:HttpClient) { }

  submitQuery(result) {
    this.query = result.query

    const getData = new GetDataService(this.http);
    getData.searchByStockName(this.query).subscribe(data => {
      this.searchResults = data 
      this.searchResults = this.searchResults.bestMatches
      // this.symbol = this.searchResults.bestMatches["1. symbol"]
      console.log('stuff:' + JSON.stringify(this.searchResults))
    })
  }
  
  ngOnInit() {
  }


}
