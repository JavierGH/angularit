import { Component } from '@angular/core';
import { Customer, Service } from 'src/app/hello.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private service:Service<Customer> ){
      console.log(service)
  }
}
