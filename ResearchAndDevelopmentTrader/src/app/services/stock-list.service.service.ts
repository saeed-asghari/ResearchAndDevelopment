import { Injectable } from '@angular/core';
import {
  Subscription,
  StatusWidget,
  LightstreamerClient,
  ConnectionSharing
} from 'lightstreamer-client-web';

@Injectable({
  providedIn: 'root',
})
export class StockListService {
  constructor() {}
  subscribe(items: string[], fields: string[]) {
    const subscription = new Subscription('MERGE', items, fields);
    subscription.setDataAdapter('QUOTE_ADAPTER');
    const lsClient = new LightstreamerClient(
      (document.location.protocol === 'https:' ? 'https' : 'http') +
        '://push.lightstreamer.com',
      'DEMO'
    );
    
      //lsClient.connectionSharing.enableSharing('DemoCommonConnection', 'ATTACH', 'CREATE');
    // subscription.addListener({
    //   onItemUpdate: function (obj: any) {
    //     console.log(
    //       obj.getValue('stock_name') + ': ' + obj.getValue('last_price')
    //     );
    //   },
    // });
    lsClient.enableSharing(
      new ConnectionSharing("DemoCommonConnection", "ATTACH", "CREATE")
    );
    //lsClient.addListener(new StatusWidget('left', '0px', true));
    lsClient.connect();
    lsClient.subscribe(subscription);
    return subscription;
  }

}
