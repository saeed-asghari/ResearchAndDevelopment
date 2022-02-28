import { Component, OnInit } from '@angular/core';
import { StockListService } from '../services/stock-list.service.service';
import { DynaGrid, ItemUpdate } from 'lightstreamer-client-web';
@Component({
  selector: 'app-changes-row-stock',
  templateUrl: './changes-row-stock.component.html',
  styleUrls: ['./changes-row-stock.component.css']
})
export class ChangesRowStockComponent implements OnInit {

  redColor: string = '#f8b87a';
  greenColor: string = 'lightgreen';
  backC: string = 'transparent';
  hotTxtCol: string = '#000000';
  fieldsList: string[] = [
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
    'stock_name',
    'item_status',
  ];
  itemList1: string[] = [
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
    'item11',
    'item12',
    'item13',
    'item14',
    'item15',
  ];
  itemList2: string[] = [
    'item16',
    'item17',
    'item18',
    'item19',
    'item20',
    'item21',
    'item22',
    'item23',
    'item24',
    'item25',
    'item26',
    'item27',
    'item28',
    'item29',
    'item30',
  ];
  imgUp: string = 'assets/images/quotes_up.gif';
  imgDown: string = 'assets/images/quotes_down.gif';
  doFade = location.search.indexOf('fade=ON') > -1;
  unique = Math.floor(Math.random() * 1000);
  // lsClient: any;
  pageNumber = 1;
  subsItemList1: any;
  subsItemList2: any;
  styleH: string = 'lshot';
  styleC: string = 'lscold';

  initialSort: string = 'stock_name';
  direction: boolean = false;
  dynaGrid: DynaGrid | undefined;
  cellList : String[] | undefined;
  stocks: any;
  constructor(private service: StockListService) {
 
  }

  ngOnInit(): void {
    var self = this;
    
    this.dynaGrid = new DynaGrid('stocks', true);
    console.log("dynaGrid", self.dynaGrid)
    
    // this.dynaGrid = new DynaGrid('stocks', true);
    this.cellList = this.dynaGrid.extractFieldList();
     console.log(this.cellList)
    this.dynaGrid.setNodeTypes(['div', 'span', 'img', 'a']);
    this.dynaGrid.setAutoCleanBehavior(true, false);
    this.dynaGrid.addListener({
      onVisualUpdate: function (key, info, domNode) {
        if (info == null) {
          return;
        }
      //  console.log("info",info)
        console.log("domNode",domNode)
        self.stocks = info;
        //general style and effects
        info.setHotTime(400);
        info.setStyle(self.styleH, self.styleC);
        if (info.getChangedFieldValue('stock_name') != null) {
          // self.dynaGrid.updateRow(key, {
          //   click: "openPopup('" + key + "');return false;",
          // });
        } else if (self.doFade) {
          info.setHotToColdTime(300);
        }

        if (info.getChangedFieldValue('item_status') == 'inactive') {
          //possible if testing the JMS version of the Data Adapter
          //if it happens we want all the cells to be highlighted in grey;
          //first we force the highlighting on every cell
          //forceHighlight(info, true, cellList);

          info.setAttribute('#808080', '#808080', 'color');
        } else {
          if (
            info.getChangedFieldValue('item_status') == 'active' &&
            self.dynaGrid!.getValue(key, 'item_status') == 'inactive'
          ) {
            //possible if testing the JMS version of the Data Adapter
            //so we force again the highlighting on every cell to restore
            //the "active" color
            // forceHighlight(info, true, cellList);

            info.setAttribute('#000000', '#000000', 'color');
            info.setCellAttribute('stock_name', '#000080', '#000080', 'color');
          }

          // illumination color
          // choose the backgroundColor
          var lastPrice = info.getChangedFieldValue('last_price');
          if (lastPrice !== null) {
            var prevPrice = self.dynaGrid!.getValue(key, 'last_price');
            if (!prevPrice || lastPrice > prevPrice) {
              info.setAttribute(self.greenColor, '', 'backgroundColor');
            } else {
              info.setAttribute(self.redColor, '', 'backgroundColor');
            }
          } else {
            info.setAttribute(self.greenColor, '', 'backgroundColor');
          }

          //put arrow and handle change style
          var pctChange = info.getChangedFieldValue('pct_change');
          if (pctChange !== null) {
            //  pctChange = formatDecimal(pctChange, 2, true) + '%';
            //hotTxtCol = pctChange.charAt(0) == '-' ? '#dd0000' : '#009900';
            if (pctChange.indexOf('-') > -1) {
              info.setCellValue('arrow', self.imgDown);
              info.setCellAttribute('arrow', '', '', 'backgroundColor');

              info.setCellAttribute(
                'pct_change',
                'black',
                self.hotTxtCol,
                'color'
              );
              info.setCellValue('pct_change', pctChange);
            } else {
              info.setCellValue('arrow', self.imgUp);
              info.setCellAttribute('arrow', '', '', 'backgroundColor');

              info.setCellAttribute(
                'pct_change',
                'black',
                self.hotTxtCol,
                'color'
              );
              info.setCellValue('pct_change', '+' + pctChange);
            }
            info.setCellAttribute('pct_change', 'bold', 'bold', 'fontWeight');
          }



          // format the timestamp
          var time = info.getChangedFieldValue('time');
          if (time != null) {
            // info.setCellValue('time', formatTime(time));
          }
        }
      },
    });


     this.service
      .subscribe(this.itemList1, this.fieldsList)
      .addListener(this.dynaGrid);

  }
}
