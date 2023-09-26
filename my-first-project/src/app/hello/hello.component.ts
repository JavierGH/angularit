import { Component, Inject } from '@angular/core';
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
    this.customerService.get({ id: "1" });
    this.invoiceService.get({id:"1",name:"Pedro Hurtado"})
  }
}
