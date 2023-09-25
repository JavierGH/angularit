import { Pipe, PipeTransform } from '@angular/core';


const options: Intl.DateTimeFormatOptions = {     
  hour: 'numeric', 
  minute: 'numeric', 
  second:'numeric'
}

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    return Intl.DateTimeFormat("ES-es",options).format(value);
  }

}
