import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public RAPIDAPI_BASE_URL: string = 'https://iata-and-icao-codes.p.rapidapi.com/';
  public RAPIDAPI_HOST: string = 'iata-and-icao-codes.p.rapidapi.com';
  public RAPIDAPI_KEY: string = 'x9axAlAXnHmshL4pcrUTvp93WvJCp1xooNnjsnOZLTaB1Jjlwp';
  public LINK_PREVIEW_BASE_URL: string = 'http://api.linkpreview.net/';
  public LINK_PREVIEW_KEY: string = '5ce57561e277e26cae61b03bc5a2099bd00d0f8c35e67';

  constructor() { }
}
