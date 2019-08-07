import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private location: Location) {
  }
  currentUrl()
  {
    return this.location.path();
  }
  ngOnInit() {
  }
}
