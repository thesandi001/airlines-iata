import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private base_url: string = 'https://iata-and-icao-codes.p.rapidapi.com/';
  private host: string = 'iata-and-icao-codes.p.rapidapi.com';
  private key: string = 'x9axAlAXnHmshL4pcrUTvp93WvJCp1xooNnjsnOZLTaB1Jjlwp';

  constructor(
    private _http: HttpClient
  ) { }

  get(url): any {
    return this._http.get(this.base_url + url, this.httpOptions);
  }

  post(url, data): any {
    return this._http.post(this.base_url + url, data, this.httpOptions);
  }

  put(url, data): any {
    return this._http.put(this.base_url + url, data, this.httpOptions)
  }

  delete(url): any {
    return this._http.delete(this.base_url + url, this.httpOptions);
  }

  get httpOptions() {
    return {
      headers: new HttpHeaders({
      	'X-RapidAPI-Host': this.host,
      	'X-RapidAPI-Key' : this.key
      })
    }
  }
}