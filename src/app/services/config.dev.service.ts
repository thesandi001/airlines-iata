import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public RAPIDAPI_BASE_URL: string = 'https://iata-and-icao-codes.p.rapidapi.com/';
  public RAPIDAPI_HOST: string = 'iata-and-icao-codes.p.rapidapi.com';
  public RAPIDAPI_KEY: string = 'YOUR_OWN_KEY_HERE';
  public LINK_PREVIEW_BASE_URL: string = 'http://api.linkpreview.net/';
  public LINK_PREVIEW_KEY: string = 'YOUR_OWN_KEY_HERE';

  constructor() { }
}