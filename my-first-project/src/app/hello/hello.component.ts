import { Component, Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { Customer, 
  HelloService, 
  Invoices, 
  PATHCUSTOMER, 
  PATHINVOICES,
  Service } 
  from '../hello.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {
  public data = ''
  constructor(
    private service: HelloService,  
    
    @Inject(PATHCUSTOMER) 
    private customerService: Service<Customer>,

    @Inject(PATHINVOICES)
    private invoiceService: Service<Invoices>

  ) {
    this.data = this.service.get();
    

    /*this.http.get<Invoices>("")
      .subscribe(invoices=>invoices)*/

  }
  
  async getData(){    
      const customer = await this.customerService.get();      
  }
}
