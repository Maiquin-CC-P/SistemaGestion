import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Pipe({
    name: 'element'
  })
  export class elementPipe<T> implements PipeTransform {

    constructor(
        private sanitizer: DomSanitizer
    ){}
    transform(item: T): SafeHtml {
        let elementHtml: SafeHtml = '';
        for (const key in item) {
          if (key === 'htmlElement') {
            const element: string = String(item[key]);
            elementHtml = this.sanitizer.bypassSecurityTrustHtml(element);
            break;
          }
        }
        return elementHtml;
    }
  }