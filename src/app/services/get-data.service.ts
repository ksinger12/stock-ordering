import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  baseUrl = "http://trader-app-trader-app.openshift28.conygre.com/";
  url="";
  constructor(private http : HttpClient) { }

  getStockData(stockTicker:String, timeStep:String) 
  {
    this.url = this.baseUrl + `api/data/company/${stockTicker}/${timeStep}`
    return this.http.get(this.url);
  }

  getCompanyOverview(stockTicker:String) 
  {
    this.url = this.baseUrl + `api/data/company/overview/${stockTicker}`
    return this.http.get(this.url);
  }

  getStockQuote(stockTicker:String) {
    this.url = this.baseUrl + `api/data/company/quote/${stockTicker}`
    return this.http.get(this.url)
  }

  getSectorInformation() {
    this.url = this.baseUrl + "api/data/sector"
    return this.http.get(this.url)
  }

  addCashAssets(cashToAdd:String) {
    this.url = this.baseUrl + "api/cash/addCashAssetsValue"
    return this.http.post(this.url, {"cashToAdd": cashToAdd})
  }

  getCashAssets() {
    this.url = this.baseUrl + "api/cash/cashAssetsValue"
    return this.http.get(this.url)
  }

  setCashAssets(initialCashAssets:String) {
    this.url = this.baseUrl + "/api/cash/setCashAssetsValue"
    return this.http.post(this.url, {"initialCashAssets": initialCashAssets})
  }

  findAllHoldings() {
    this.url = this.baseUrl + "api/holdings/"
    return this.http.get(this.url)
  }

  addHolding(companyName:String, id:Number, numberOfShares:Number, tickerSymbol:String) {
    this.url = this.baseUrl + "/api/holdings/"
    return this.http.post(this.url, {
      "companyName": companyName,
      "numberOfShares": numberOfShares,
      "tickerSymbol": tickerSymbol
    })
  }

  deleteHolding(id:Number) {
    this.url = this.baseUrl + `/api/holdings/${id}`
    return this.http.delete(this.url)
  }

  findAllTrades() {
    this.url = this.baseUrl + "/api/trades"
    return this.http.get(this.url)
  }

  addTrade(companyName:String, date:String, orderType:String, price:Number, quantity:Number, tickerSymbol:String) {
    this.url = this.baseUrl + "/api/trades/"
    return this.http.post(this.url, {
      "companyName": companyName,
      "dateEntered": date,
      "orderType": orderType,
      "price": price,
      "quantity": quantity,
      "tickerSymbol": tickerSymbol
    })
  }

  findAllByTickerSymbol(tickerSymbol) {
    this.url = this.baseUrl + `/api/trades/${tickerSymbol}`
    return this.http.get(this.url)
  }

  searchByStockName(query) {
    this.url = this.baseUrl + `/api/stock/search/${query}`
    return this.http.get(this.url)
  }
}
