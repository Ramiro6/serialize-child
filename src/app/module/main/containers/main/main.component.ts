import {Component, OnInit} from '@angular/core';
import {GetDataService} from '../../services/get-data/get-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  itemOrder = ['file 1', 'file 2', 'file 3', 'file 4', 'file 5', 'file 6'];
  constructor( private api: GetDataService ) { }

  ngOnInit(): void {
  }

  elementReturn($event: string) {
    console.log('Element return', $event);
  }
}
