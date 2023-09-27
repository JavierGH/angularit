import { Component } from '@angular/core';
import { Customer, Service } from 'src/app/hello.service';

@Component({
  selector: 'cust-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[
    {provide:'path', useValue:"customers.json"},
    Service<Customer>
  ]
})
export class ListComponent {
  public customers:Customer[] = [];
  constructor(private service:Service<Customer>){
    this.getData();
  }
  async getData(){
    this.customers = await this.service.getAll();
    /*const response = await fetch("http://localhost:8080/customers.json")
    this.customers = await response.json()*/
  }
}
