import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConfigService } from './services/config.service';
import { HttpService } from './services/http.service';
import { CommonService } from './services/common.service';
import { AirlineService } from './services/airline.service';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { AirlineNamePipe } from './pipes/airline-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AirlineNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [
    ConfigService,
  	HttpService,
  	CommonService,
  	AirlineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }