import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayComponent } from './day/day.component';
import { UpperPipe } from './upper.pipe';
import { TimePipe } from './time.pipe';
import { TimeComponent } from './time/time.component';
import { HelloComponent } from './hello/hello.component';

import { Customer, Invoices, Service, PATHCUSTOMER, PATHINVOICES } from './hello.service';
//import { HelloService } from './hello.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { InvoicesModule } from './invoices/invoices.module';
import { CustomerModule } from './customer/customer.module';



@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    UpperPipe,
    TimePipe,
    TimeComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InvoicesModule,
    CustomerModule
  ],
  /*providers:[
    HelloService
  ]*/

  providers: [
    {
      provide: PATHCUSTOMER,
      useFactory: (http:HttpClient) => new Service<Customer>("/customers", http),
      deps:[HttpClient]
    },

    {

      provide:PATHINVOICES,
      useFactory:(http:HttpClient)=>new Service<Invoices>("/invoides",http),
      deps:[HttpClient]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
