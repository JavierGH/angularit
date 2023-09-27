//root
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable,lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor() {
    //console.log("Hello Service")
   }
   get(){
    return "Hello Service get"
   }
}

@Injectable({
  providedIn: 'root'
})
export class Service<T>{
  private readonly path:string;
  private readonly http:HttpClient
  constructor(@Inject("path") path:string, http:HttpClient){
    this.path = path;
    this.http = http;
  }
  get():Promise<T>{
      return lastValueFrom(this.http.get<T>(""))
  }
}

export const PATHCUSTOMER = "/customer"

export interface Customer{
  id:string
}

export const PATHINVOICES = "/customer"
export interface Invoices{
  id:string
  name:string
}
