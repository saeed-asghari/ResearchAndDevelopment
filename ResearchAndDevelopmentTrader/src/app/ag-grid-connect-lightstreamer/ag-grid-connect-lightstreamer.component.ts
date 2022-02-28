import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent, ValueFormatterParams, ValueParserParams } from 'ag-grid-community';
import { ItemUpdate, LightstreamerClient } from 'lightstreamer-client-web';
import { StockListService } from '../services/stock-list.service.service';

import 'ag-grid-enterprise';

@Component({
  selector: 'app-ag-grid-connect-lightstreamer',
  templateUrl: './ag-grid-connect-lightstreamer.component.html',
  styleUrls: ['./ag-grid-connect-lightstreamer.component.css'],
})

export class AgGridConnectLightstreamerComponent implements OnInit {
  
  public columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'stock_name' },
    {
      headerName: 'Last',
      field: 'last_price',
      cellRenderer: 'agAnimateShowChangeCellRenderer',
      valueFormatter: numberFormatter,
    },
    { headerName: 'Time', field: 'time' },
  ];
  

  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 120,
    resizable: true,
    cellClass: 'align-right',
 
  };
  
  gridApi: GridApi | undefined;
    itemNames= ['item1', 'item2', 'item3'];
    fieldNames = ['stock_name', 'last_price', 'time'];
  getRowNodeId = (data : any) => data.stock_name;
  public rowData = [
    { stock_name: 'Ations Europe' },
    { stock_name: 'Anduct' },
    { stock_name: 'Bagies Consulting' },
  ];
  constructor(private service: StockListService) {}

  ngOnInit() {
    this.service.subscribe(this.itemNames, this.fieldNames).addListener({
      onItemUpdate: (obj: ItemUpdate) => {
        const stock_name = obj.getValue('stock_name');
        // have to convert this to a integer
        const last_price =Number(obj.getValue('last_price'));
        const time = obj.getValue('time');
        const newItem = { stock_name, last_price, time };
        if (this.gridApi) {
          this.gridApi.applyTransaction({ update: [newItem] });
        }
      },
      onSubscriptionError: function (errorCode, errorMessage) {
        //here you can consume the error
        console.log(errorCode + ':' + errorMessage);
      },
    });
  }
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }
}

function numberFormatter(params: ValueFormatterParams) {
  if (typeof params.value === 'number') {
    return params.value.toFixed(2);
  } else {
    return params.value;
  }
}