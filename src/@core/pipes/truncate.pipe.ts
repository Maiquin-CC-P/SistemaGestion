import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'truncate'
})
export class truncatePipe implements PipeTransform {
    transform<T>(value: T, maxLength: number = 30): T {
        let rpta: T = value;
        if (maxLength === 0) {
            return rpta;
        }
        if (typeof (value) === 'string') {
            if (value.length > maxLength) {
                rpta = (value.substring(0, maxLength) + '...') as unknown as T;
            }
        }
        return rpta;
    }
}