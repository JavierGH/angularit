import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profileForm = new FormGroup({
    name:new FormControl(undefined)
  })
  handlerSubmit(){
    console.log(this.profileForm.value)
  }
  constructor(){

    //recursivo

    /*const result = Object.entries(this.profileForm.value)
    .reduce((a,v)=>{
      a[v[0]] = v[1]===null?undefined?v[1];
      return a;
    },{})*/

    //console.log(this.profileForm.value)
  }
}
