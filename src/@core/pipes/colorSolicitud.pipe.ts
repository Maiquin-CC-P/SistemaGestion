import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'colorSolicitud'
})
export class colorSolicitudPipe<T> implements PipeTransform {
  transform(item: T): string {
    let colorRGB: string = '';
    for (const key in item) {
      if (key === 'rgb') {
        // isInactive = item[key] === 2 ? true : false;

        if (!item[key] || item[key] === '0|0|0') {
          colorRGB = '';
          return colorRGB;
        }

        const color = String(item[key]);
        const rgbArray = color.split('|');
        if (rgbArray.length !== 3) {
          colorRGB = '';
        }

        const [r, g, b] = rgbArray.map(Number);
        colorRGB = `rgb(${r}, ${g}, ${b})`;

        break;
      }
    }
    return colorRGB;
  }
}