import {Component, OnInit} from '@angular/core';
import {GetDataService} from '../../services/get-data/get-data.service';
import {ContentService} from '../../../shared/services/content.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  itemOrder = ['file 1', 'file 2', 'file 3', 'file 4', 'file 5', 'file 6'];
  data: Observable<Item> = this.apiData.getData();
  constructor( private api: GetDataService,
               private apiData: ContentService ) { }

  ngOnInit(): void {
  }

  elementReturn($event: string) {
    console.log('Element return', $event);
  }
}
