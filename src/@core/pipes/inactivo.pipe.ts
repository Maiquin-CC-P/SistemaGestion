import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'inactivo'
  })
  export class inactivoPipe<T> implements PipeTransform {
    transform(item: T): boolean {
        let isInactive: boolean = false;
        for (const key in item) {
          if (key === 'idEstado') {
            isInactive = item[key] === 2 ? true : false;
            break;
          }
        }
        return isInactive;
    }
  }