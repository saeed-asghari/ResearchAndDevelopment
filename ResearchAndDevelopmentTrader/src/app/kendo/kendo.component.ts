import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kendo',
  templateUrl: './kendo.component.html',
  styleUrls: ['./kendo.component.css']
})
export class KendoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public gridData: any[] = [
    {
        ProductID: 1,
        ProductName: 'PC',
        UnitPrice: 1008,
        Category: {
            CategoryID: 1,
            CategoryName: 'Computer'
        }
    },
    {
      ProductID: 2,
      ProductName: 'TV BRV',
      UnitPrice: 1800,
      Category: {
          CategoryID: 1,
          CategoryName: 'Furnisher'
      }
  }
];
}
