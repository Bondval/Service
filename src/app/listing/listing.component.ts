import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  recuring:number=1;
  rating:string='5.0';
  reviews:number=242;
  public sorts: boolean = true;

  onSort(){
    this.sorts = !this.sorts;
  }
  constructor() { }

  ngOnInit() {
  }

}
