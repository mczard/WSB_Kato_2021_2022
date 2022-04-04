import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[wsbSample]'
})
export class SampleDirective {

  constructor(render: Renderer2, elemRef: ElementRef) {
    render.setStyle(elemRef.nativeElement, 'border-radius', '100px');
  }

}
