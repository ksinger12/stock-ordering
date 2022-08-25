import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from '../../services/get-data.service'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  allTrades
  constructor(private router: Router, private http:HttpClient) { }
  
  ngOnInit() {
    this.getAllTrades()
  }

  getAllTrades() {
    const getData = new GetDataService(this.http);
    getData.findAllHoldings().subscribe(data => {
      this.allTrades = data
      console.log(data)
    })
  }

}
