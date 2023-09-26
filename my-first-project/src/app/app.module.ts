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
    AppRoutingModule
  ],
  /*providers:[
    HelloService
  ]*/

  providers: [
    {
      provide: PATHCUSTOMER,
      useFactory: () => new Service<Customer>("/customers")
    },
    
    {
      provide:PATHINVOICES,
      useFactory:()=>new Service<Invoices>("/invoides")
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
