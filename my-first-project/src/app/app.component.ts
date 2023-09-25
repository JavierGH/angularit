import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';

function* generator(){
  for(var i=0;i<31;i++){
    yield i+1;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  name = "pedro";
  array = [...generator()]
  user ="Pedro";

  isLogin():boolean{
    return !this.user
  }
  hanlderClick(ev:Event){

    ev.stopPropagation();
    
    const node = ev.composedPath()
      .map(node=>node as HTMLElement)
      .find(n=>n.dataset && 'day' in n.dataset);

    if (node){
      const {day} = node.dataset;
      console.log(day);
    }

    /*const element = ev.target as HTMLElement;    
    const {day} = element.dataset;
    console.log(day);*/
  }
  handlerDay(day:number){
    console.log(day)
  }
}
