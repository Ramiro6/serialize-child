import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appSetWidth]'
})
export class SetStyleDirective implements OnChanges {
  @Input() typeStyle: string;
  @Input() quantity: string | number;
  @Input() units?: string;
  constructor(private element: ElementRef,
              private render: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.quantity && this.typeStyle) {
      this.render.setStyle(this.element.nativeElement, this.typeStyle, `${this.quantity}${
        (() => {
          return this.units ? this.units : 'px';
        })()
      }`);
    }
  }
}
