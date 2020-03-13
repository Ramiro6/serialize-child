import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  navigateTo($event: MouseEvent) {
    this.router.navigate(['/dashboard']).then();
  }
}
