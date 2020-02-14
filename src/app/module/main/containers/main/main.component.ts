import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { GetDataService } from '../../services/get-data/get-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('input') inputElement: ElementRef;
  @ViewChildren('liSelect', { read: ElementRef }) liSelect: QueryList<ElementRef>;


  itemOrder = ['file 1', 'file 2', 'file 3', 'file 4', 'file 5', 'file 6'];

  constructor( private api: GetDataService ) { }

  ngOnInit(): void {

  }


  onClick(value): void {
    const natiInput: HTMLInputElement = this.inputElement.nativeElement;
    natiInput.value = value;
  }

  searchBar(term: KeyboardEvent): void {
    if (term.keyCode === 40) {
      this.liSelect.first.nativeElement.focus();
      // const listItem: HTMLInputElement = this.liSelect.nativeElement;
      // listItem.focus();
      // console.log(this.liSelect.nativeElement);
    } else if (term.keyCode === 38) {
      this.liSelect.last.nativeElement.focus();
    }
    // console.log(term);
  }

  changeKeyDown(item, id): void {
    const getElement: ElementRef = this.liSelect.find((itemNoused: ElementRef, idName: number) => {
      return idName === id + 1;
    });


    if (getElement) {
      const getNative: HTMLElement = getElement.nativeElement;
      getNative.focus();
    } else {
      this.liSelect.last.nativeElement.blur();
      this.inputElement.nativeElement.focus();
    }
  }


  changeKeyUp(item, id): void {
    const getElement: ElementRef = this.liSelect.find((itemNoused: ElementRef, idName: number) => {
      return idName === id - 1;
    });


    if (getElement) {
      const getNative: HTMLElement = getElement.nativeElement;
      getNative.focus();
    } else {
      this.liSelect.first.nativeElement.blur();
      this.inputElement.nativeElement.focus();
    }
  }
}
