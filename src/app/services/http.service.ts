import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';


@Injectable({
  providedIn: 'root'
})
export class HttpService {  

  constructor(
    private _config: ConfigService,
    private _http: HttpClient
  ) { }

  get(url, external?): any {
    if (external && typeof external === 'boolean' && external === true) {
      return this._http.get(url);
    }
    return this._http.get(this._config.RAPIDAPI_BASE_URL + url, this.httpOptions);
  }

  post(url, data): any {
    return this._http.post(this._config.RAPIDAPI_BASE_URL + url, data, this.httpOptions);
  }

  put(url, data): any {
    return this._http.put(this._config.RAPIDAPI_BASE_URL + url, data, this.httpOptions)
  }

  delete(url): any {
    return this._http.delete(this._config.RAPIDAPI_BASE_URL + url, this.httpOptions);
  }

  get httpOptions() {
    return {
      headers: new HttpHeaders({
      	'X-RapidAPI-Host': this._config.RAPIDAPI_HOST,
      	'X-RapidAPI-Key' : this._config.RAPIDAPI_KEY
      })
    }
  }
}