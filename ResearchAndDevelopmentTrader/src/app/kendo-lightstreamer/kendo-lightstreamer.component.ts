import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  GridComponent,
  GridDataResult,
  GridItem,
  RowClassArgs,
} from '@progress/kendo-angular-grid';
import { ItemUpdate } from 'lightstreamer-client-web';
import { StockListService } from '../services/stock-list.service.service';

@Component({
  selector: 'app-kendo-lightstreamer',
  templateUrl: './kendo-lightstreamer.component.html',

  styleUrls: ['./kendo-lightstreamer.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class KendoLightstreamerComponent implements OnInit {
  itemNames = ['item1', 'item2', 'item3'];
  fieldNames = ['stock_name', 'last_price', 'time'];
  gridData: any[][] = [];
  

  //  gridData :  GridDataResult  = { data: [], total: 0 };;
  constructor(private service: StockListService) {
    this.gridData = this.newTable();
    //this.loadGrid()
  }

  // gridData = [
  //   { stock_name: 'Ations Europe', },
  //   { stock_name: 'Anduct' },
  //   { stock_name: 'Bagies Consulting' },
  // ];
  test = [
    { last_price: 16.2, stock_name: 'Ations Europe', time: '11:19:48' },
    { last_price: 16.2, stock_name: 'Ations Europe', time: '11:19:48' },
  ];
  ngAfterViewInit() {
    // this.loadGrid()
  }
  ngOnInit() {
    this.loadGrid();
  }

  public loadGrid() {
    this.service.subscribe(this.itemNames, this.fieldNames).addListener({
      onItemUpdate: (obj: ItemUpdate) => {
        const itemName = obj.getItemName();
        var iitem = [];
        const newItem: any = {};
        obj.forEachChangedField(
          (fieldName: string, fieldPos: number, val: string) => {
            const itemIndex = this.itemNames.indexOf(itemName);
            const fieldIndex = this.fieldNames.indexOf(fieldName);

            // for(var i= 0; i<this.fieldNames.length;i++){
            //    const fild = this.fieldNames[i]
            //    newItem[fild] = val
            // }
            // this.gridData[itemIndex][fieldIndex] = newItem;
            // this.gridData[itemIndex][fieldIndex] = val;
            this.gridData[itemIndex][fieldIndex] = val;
            // console.log(this.gridData)
            // debugger.
          }
        );
        // this.gridData= newItem
        //   const stock_name = obj.getValue('stock_name');
        //   // have to convert this to a integer
        //   const last_price = Number(obj.getValue('last_price'));
        //   const time = obj.getValue('time');
        //   // const newItem = { stock_name, last_price, time };
        //   const newData = [{ stock_name, last_price, time }];
        //   // this.gridData.transport({ update: [newData] })
        //   this.gridData = {
        //     data: newData,
        //     total: newData.length
        // };
      },
      onSubscriptionError: function (errorCode, errorMessage) {
        //here you can consume the error
        console.log(errorCode + ':' + errorMessage);
      },
    });
  }
  private newTable() {
    return new Array(this.itemNames.length)
      .fill(null)
      .map(() => new Array(this.fieldNames.length).fill(''));
  }
  public onStateChange() {
    //this.loadGrid()
  }
  public trackBy(index: number, item: GridItem): any {
    console.log(item);
    return index;
  }
}
