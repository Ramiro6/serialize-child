import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data/get-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor( private api: GetDataService ) { }

  ngOnInit(): void {
  }

}
