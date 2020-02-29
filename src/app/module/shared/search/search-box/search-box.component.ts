import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {InputSearchComponent} from '../../input/input-search/input-search.component';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBoxComponent implements OnInit {
  modelChild: any;
  @Input() nameOfSearch: string;
  @Output() returnValue: EventEmitter<any> = new EventEmitter<any>();
  @Output() keyMove: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild(InputSearchComponent, { read: ElementRef }) inputElement: InputSearchComponent;

  constructor( private cdr: ChangeDetectorRef ) { }

  ngOnInit(): void {}


  toReturnValue(event: string): void {
    console.log(event)
    this.returnValue.emit(event);
  }

  onEnter($event: KeyboardEvent) {
    console.log($event.target);
  }

  __setValue(event) {
    this.modelChild = event;
    this.cdr.markForCheck();
  }

  onDownOrUp(event: KeyboardEvent) {
    const handler = {
      ArrowDown: () => {
        this.keyMove.emit('down');
      },
      ArrowUp: () => {
        this.keyMove.emit('up');
      }
    };

    if (handler[event.code]) {
      handler[event.code]();
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
