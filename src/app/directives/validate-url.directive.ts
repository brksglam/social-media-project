import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[validateUrl]'
})
export class ValidateUrlDirective {

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    const url = this.el.nativeElement.value;
    const pattern = new RegExp('^(https?:\\/\\/)?'+ '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ '((\\d{1,3}\\.){3}\\d{1,3}))'+ '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ '(\\?[;&a-z\\d%_.~+=-]*)?'+ '(\\#[-a-z\\d_]*)?$','i');
    if (!pattern.test(url)) {
      alert('Invalid URL');
    }
  }
}
