import {Directive, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appSetClick]'
})
export class SetClickDirective {
  @Output() matchClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() takeBox: ElementRef;

  constructor( private element: ElementRef ) {}

  @HostListener('document:click', ['$event'])
  onClick({ target }) {
    const elRef: HTMLElement = this.element.nativeElement;
    if (!elRef.contains(target) && !elRef?.parentElement?.contains(target)) {
      this.closePop(false);
    }
  }

  private closePop(event: boolean): void {
    this.matchClick.emit(event);
  }

}
