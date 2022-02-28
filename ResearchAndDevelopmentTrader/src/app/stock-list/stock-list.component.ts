import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ItemUpdate,DynaGrid } from 'lightstreamer-client-web';
import { StockListService } from '../services/stock-list.service.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css'],
})
export class StockListComponent implements OnInit {
  itemNames = [
    'item1',
    'item2',
    'item3',
    'item4',
    'item5',
    'item6',
    'item7',
    'item8',
    'item9',
    'item10',
  ];
  fieldNames = [
    'stock_name',
    'last_price',
    'time',
    'pct_change',
    'bid_quantity',
    'bid',
    'ask',
    'ask_quantity',
    'min',
    'max',
    'ref_price',
    'open_price',
  ];
  //stocks: string[][];
  stocks: any;
  redColor:string= "#f8b87a";
  greenColor:string="lightgreen";
  // ref is needed to refresh the service's clients when the stock matrix changes
  constructor(
    private service: StockListService,
    private ref: ChangeDetectorRef
  ) {
    this.stocks = this.newTable();
  }
  ngOnInit() {
    this.service.subscribe(this.itemNames, this.fieldNames).addListener({
      onItemUpdate: (updateObject: ItemUpdate) => {
        const itemName = updateObject.getItemName();
        updateObject.forEachChangedField(
          (fieldName: string, fieldPos: number, val: string) => {
            const itemIndex = this.itemNames.indexOf(itemName);
            const fieldIndex = this.fieldNames.indexOf(fieldName);
            console.assert(itemIndex !== -1);
            console.assert(fieldIndex !== -1);
            this.stocks[itemIndex][fieldIndex] = val;
            console.log(val)
          }
        );
        this.ref.detectChanges();
      },
      onSubscriptionError: function (errorCode, errorMessage) {
        //here you can consume the error
        console.log(errorCode + ':' + errorMessage);
      },
    });
  }
  getChangedFieldValue(cellName: string) {
    const fieldIndex = this.fieldNames.indexOf(cellName);
  }
  private newTable() {
    return new Array(this.itemNames.length)
      .fill(null)
      .map(() => new Array(this.fieldNames.length).fill('-'));
  }
  
}
