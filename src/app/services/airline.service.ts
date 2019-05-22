import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { CommonService } from './common.service';
import { API } from '../common/api';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  constructor(
    private _http: HttpService,
    private _common: CommonService
  ) { }

  getAll() {
    const url = `${API.AIRLINES.GET_ALL}`;
    return this._http.get(url);
  }

  get(data: any = {}) {
    const url = `${API.AIRLINES.GET}` + this._common.serialize(data);
    return this._http.get(url);
  }

}