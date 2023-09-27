import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { Service, Invoices } from '../hello.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListComponent
  ],
  exports:[
    ListComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class InvoicesModule { }
