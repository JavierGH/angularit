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
const server_url = "http://localhost:8080/"

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
  getAll():Promise<T[]>{
      const url = `${server_url}${this.path}`
      return lastValueFrom(this.http.get<T[]>(url))
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
