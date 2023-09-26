//root
import { Injectable } from '@angular/core';

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

/*@Injectable({
  providedIn: 'root'
})*/

export class Service<T>{
  private readonly path:string;
  constructor(path:string){
    this.path = path;
  }
  get(t:T){
      
      const result = `
         path:
            ${this.path}
         data: 
            ${JSON.stringify(t)}
      `
      console.log(result)
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
