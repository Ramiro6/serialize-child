import {Directive, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appSetClick]'
})
export class SetClickDirective {
  @Output() matchClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() takeBox: ElementRef;

  constructor( private element: ElementRef ) {}

  @HostListener('document:click', ['$event'])
  onClick({ path }) {
    const getElement: HTMLUListElement = this.element.nativeElement;
    if (path.includes(getElement) || path.includes(this.takeBox.nativeElement) ) {
      return;
    } else {
      this.sendData(false);
    }
  }

  private sendData(event: boolean): void {
    this.matchClick.emit(event);
  }

}
