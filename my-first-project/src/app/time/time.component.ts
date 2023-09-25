import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']})
export class TimeComponent  implements OnInit, OnDestroy{
   ngOnInit(): void {
     this.handler= setInterval(()=>{
           this.date = new Date();
     },1000);
   }
   ngOnDestroy(): void {
     this.handler && clearInterval(this.handler)
   }
   date = new Date()
   private handler = 0
   
}
