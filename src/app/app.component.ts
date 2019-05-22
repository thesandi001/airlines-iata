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
  	this._airline.getAll().subscribe(
  		(res) => {
  			this.airlines = res;
  		},
  		(err) => {
  			console.log(err);
  		},
  	);    
  }

  get(data: any = null) {
  	this._airline.get({ iata_code: data.iata_code }).subscribe(
  		(res) => {
  			data.details = res[0];
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
  		},
  		(err) => {
  			console.log(err);
  		},
  	);    
  }

}
