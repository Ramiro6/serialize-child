import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnDestroy,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {SearchBoxComponent} from '../../../shared/search/search-box/search-box.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements AfterContentInit, OnDestroy {
  @ContentChild(SearchBoxComponent) searchBox: SearchBoxComponent;
  @ContentChild(SearchBoxComponent, { read: ElementRef, static: false }) cmpSearchBox: SearchBoxComponent | ElementRef;
  @ViewChildren('liSelect', { read: ElementRef }) liSelect: QueryList<ElementRef>;
  @ViewChild('ulList', { read: ElementRef, static: false }) ulList: ElementRef;
  @Input() items: any;
  showList = false;
  quantity: string | number;
  contentSubscription$: Subscription;

  constructor( private element: ElementRef,
               private render: Renderer2,
               private cdr: ChangeDetectorRef) { }

  onClick(value): void {
    this.searchBox.__setValue(value);
  }

  ngAfterContentInit(): void {

    this.searchBox.returnValue
      .subscribe((item: string) => {
        item.length >= 3 ? this.showList = true : this.showList = false;
        this.cdr.detectChanges();
        if (this.ulList?.nativeElement) {
          console.log('Ul list', this.ulList.nativeElement);
          const cmpBox: HTMLElement = (this.cmpSearchBox as ElementRef).nativeElement;
          const firstChildBox = (cmpBox.firstElementChild as HTMLInputElement);
          const getWithElement = firstChildBox.offsetWidth;
          this.quantity = getWithElement;
        }
      });
    this.contentSubscription$ = this.searchBox.keyMove.subscribe((item: string) => {
      switch (item) {
        case 'up':
          this.liSelect.last.nativeElement.focus();
          return;
        case 'down':
          this.liSelect.first.nativeElement.focus();
          return;
      }
    });
  }

  changeKeyDown(item, id): void {
    const getElement: ElementRef = this.liSelect.find((itemNoused: ElementRef, idName: number) => {
      return idName === id + 1;
    });
    this.setFocusElement(getElement);
  }

  changeKeyUp(item, id): void {
    const getElement: ElementRef = this.liSelect.find((itemNoused: ElementRef, idName: number) => {
      return idName === id - 1;
    });

    this.setFocusElement(getElement);
  }

  setFocusElement(getElement) {
    if (getElement) {
      const getNative: HTMLElement = getElement.nativeElement;
      getNative.focus();
    } else {
      this.liSelect.last.nativeElement.blur();
      // type ElementRef
      const getInput: HTMLElement = (this.searchBox.inputElement as any).nativeElement;
      if (getInput && getInput.lastElementChild) {
        const inputHtml = (getInput.lastElementChild as HTMLInputElement);
        inputHtml.focus();
      }
    }
  }

  onEnterList($event: string) {
    this.searchBox.__setValue($event);
  }

  hiddenUl($event: boolean) {
    this.showList = $event;
  }

  ngOnDestroy(): void {
    if (this.contentSubscription$) {
      this.contentSubscription$.unsubscribe();
    }
  }
}
