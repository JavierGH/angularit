import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NyanRoutingModule } from './nyan-routing.module';
import { NyanComponent } from './nyan.component';


@NgModule({
  declarations: [
    NyanComponent
  ],
  imports: [
    CommonModule,
    NyanRoutingModule
  ]
})
export class NyanModule { }
