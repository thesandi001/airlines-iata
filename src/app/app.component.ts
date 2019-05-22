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

}
