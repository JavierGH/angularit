import { Component } from '@angular/core';
import { Invoices, Service } from 'src/app/hello.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[
    {provide:'path', useValue:"/invoices.json"},
    Service<Invoices>
  ]
})
export class ListComponent {
  public invoices:Invoices[] = []
  constructor(private service:Service<Invoices> ){
    this.getData();
  }
  async getData(){
    this.invoices = await this.service.getAll()
  }

}
