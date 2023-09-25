import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayComponent } from './day/day.component';
import { UpperPipe } from './upper.pipe';
import { TimePipe } from './time.pipe';
import { TimeComponent } from './time/time.component';

@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    UpperPipe,
    TimePipe,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
