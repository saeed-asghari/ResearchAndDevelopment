import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import 'ag-grid-enterprise';
@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css'],
})
export class AgGridComponent implements OnInit {
 // rowData: Observable<any[]> | undefined;
  lang: boolean = true;
  noRowsTemplate: string | undefined;
  loadingTemplate: string | undefined;
  rowData:any;
  constructor(private http: HttpClient) {
    //this.rowData = this.http.get<any[]>('https://www.ag-grid.com/example-assets/small-row-data.json');
 
  }

  ngOnInit(): void {
    this.loadingTemplate = `<span class="ag-overlay-loading-center">در حال بارگذاری...</span>`;
    this.noRowsTemplate = `"<span">سطری برای نمایش وجود ندارد</span>"`;

    setTimeout(() => {
      this.rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Toyota', model: 'Celica b', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
      ];
    }, 2000);
  }

  columnDefs: ColDef[] = [
    {
      headerName: 'سازنده',
      field: 'make',
      sortable: true,
      filter: true,
      hide: true,
      rowGroup: true,
    },
    { headerName: 'مدل', field: 'model', sortable: true, filter: true },
    { headerName: 'قیمت', field: 'price', sortable: true, filter: true },
  ];

  autoGroupColumnDef = {
    headerName: 'model',
    field: 'model',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true,
    },
  };
  public groupDefaultExpanded = 1;
  
}
