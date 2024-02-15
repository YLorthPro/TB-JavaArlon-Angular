import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miMaj'
})
export class MiMajPipe implements PipeTransform {

  transform(value: string, start: boolean = true): string {
    let resultat = '';

    for(let i = 0; i<value.length; i++){
      if((start && i%2 ==0) || (!start && i % 2 ==1))
        resultat += value.charAt(i).toUpperCase()
      else
        resultat += value.charAt(i).toLowerCase()
    }

    return resultat;
  }

}
