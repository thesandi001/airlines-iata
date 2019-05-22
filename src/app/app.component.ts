import { Component } from '@angular/core';
import { AirlineService } from './services/airline.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AirlineService]
})
export class AppComponent {

  airlines: any = [];
  
  constructor(
    private _airline: AirlineService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    let value: any;
    value = localStorage.getItem('airlines');
    if(value) {
      this.airlines = JSON.parse(value);
      return;
    }
  	this._airline.getAll().subscribe(
  		(res) => {
  			this.airlines = res;
        localStorage.setItem('airlines', JSON.stringify(res));
  		},
  		(err) => {
  			console.log(err);
  		},
  	);    
  }

  get(data: any = null) {
  	data.card_on = !data.card_on;
  	if(!data.card_on) return;
  	if(data.details) return;
    let value: any;
    value = localStorage.getItem(data.iata_code);
    if(value) {
      value = JSON.parse(value);
      data.details = value.details;      
      return;
    }
  	this._airline.get({ iata_code: data.iata_code }).subscribe(
  		(res) => {
  			data.details = res[0];
        localStorage.setItem(data.iata_code, JSON.stringify(data));
  			if(data.details && data.details.website) {
  				this.getUrlPreview(data);
  			}
  		},
  		(err) => {
  			console.log(err);
  		},
  	);    
  }

  getUrlPreview(data) {
  	this._airline.getUrlPreview(data.details.website).subscribe(
  		(res) => {
  			data.details.preview = res;
        localStorage.setItem(data.iata_code, JSON.stringify(data));
  		},
  		(err) => {
  			console.log(err);
  		},
  	);
  }

}
