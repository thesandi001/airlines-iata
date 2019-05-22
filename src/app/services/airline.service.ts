import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ConfigService } from './config.service';
import { CommonService } from './common.service';
import { API } from '../common/api';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  constructor(
    private _http: HttpService,
    private _common: CommonService,
    private _config: ConfigService
  ) { }

  getAll() {
    const url = `${API.AIRLINES.GET_ALL}`;
    return this._http.get(url);
  }

  get(data: any = {}) {
    const url = `${API.AIRLINES.GET}?` + this._common.serialize(data);
    return this._http.get(url);
  }

  getUrlPreview(link) {
    const req = {
      key: this._config.LINK_PREVIEW_KEY,
      q: link
    };
    const url = this._config.LINK_PREVIEW_BASE_URL + '?' + this._common.serialize(req);
    return this._http.get(url,true);
  }

}